const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });

    await page.goto('http://127.0.0.1:5176/', { waitUntil: 'networkidle0', timeout: 30000 });

    await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll('.sidebar-nav li'));
        const arteLink = links.find(l => l.innerText.includes('Arte'));
        if (arteLink) arteLink.click();
    });

    await new Promise(r => setTimeout(r, 2000));

    // Specifically target the button
    await page.evaluate(() => {
        const btn = document.querySelector('.btn-enter-pyramid');
        if (btn) btn.click();
    });

    try {
        await page.waitForSelector('.pyramid-tier.tier-0', { timeout: 10000 });
        await new Promise(r => setTimeout(r, 2000));
        await page.screenshot({ path: 'screenshot_pyramid_final.png', fullPage: false });
        console.log("Success");
    } catch (e) {
        console.error("Timeout waiting for tier-0");
    }

    await browser.close();
})();
