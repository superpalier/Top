const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:5175/', { waitUntil: 'networkidle0' });

    // Simulate clicking the first context card to enter the pyramid
    await page.evaluate(() => {
        const cards = document.querySelectorAll('.context-card.main-parent-card');
        if (cards.length > 0) cards[0].click();
    });

    // Wait for pyramid viewport to render
    await page.waitForSelector('.pyramid-viewport', { timeout: 10000 }).catch(e => console.error('Viewport timeout'));
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait for animations/DOM 

    const tier0Html = await page.evaluate(() => {
        const tier0 = document.querySelector('.tier-0');
        return tier0 ? tier0.outerHTML : 'NOT_FOUND';
    });

    console.log("--- TIER0 HTML ---");
    console.log(tier0Html);

    const metrics = await page.evaluate(() => {
        const t0 = document.querySelector('.tier-0');
        const userNode = document.querySelector('.tier-0 .user-node');
        const wrapper = document.querySelector('.pyramid-wrapper');

        let t0Rect = null;
        let pRect = null;
        let nodeStyles = {};

        if (t0) {
            t0Rect = t0.getBoundingClientRect();
        }
        if (userNode) {
            const comp = window.getComputedStyle(userNode);
            nodeStyles = {
                display: comp.display,
                visibility: comp.visibility,
                opacity: comp.opacity,
                transform: comp.transform,
                zIndex: comp.zIndex,
                width: comp.width,
                height: comp.height,
                position: comp.position,
                top: comp.top,
            };
            pRect = userNode.getBoundingClientRect();
        }
        return {
            tier0Rect: t0Rect,
            userNodeRect: pRect,
            styles: nodeStyles,
            wrapperPaddingTop: wrapper ? window.getComputedStyle(wrapper).paddingTop : 'no wrapper'
        };
    });

    console.log("--- METRICS ---");
    console.log(JSON.stringify(metrics, null, 2));

    await browser.close();
})();
