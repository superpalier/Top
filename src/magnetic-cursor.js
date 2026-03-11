export function initMagneticCursor() {
    const dot = document.getElementById('magnetic-cursor-dot');
    const ring = document.getElementById('magnetic-cursor-ring');

    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let dotX = mouseX;
    let dotY = mouseY;

    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Lerp for smooth trailing effect
    function animateCursor() {
        dotX += (mouseX - dotX) * 0.5;
        dotY += (mouseY - dotY) * 0.5;

        ringX += (mouseX - ringX) * 0.15; // Ring follows slower
        ringY += (mouseY - ringY) * 0.15;

        dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
        ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Magnetic Snapping Effect for interactive elements
    const interactivables = document.querySelectorAll('button, a, .context-card, .user-node, .sidebar-item');

    interactivables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            ring.classList.add('magnetic-active');
            dot.classList.add('magnetic-hide');
        });

        el.addEventListener('mouseleave', () => {
            ring.classList.remove('magnetic-active');
            dot.classList.remove('magnetic-hide');
        });
    });

    // Since DOM changes dynamically in this SPA, we need a MutationObserver to attach hovers
    const observer = new MutationObserver((mutations) => {
        const newInteractables = document.querySelectorAll('button, a, .context-card, .user-node, .sidebar-item');
        newInteractables.forEach(el => {
            if (!el.dataset.magneticInit) {
                el.dataset.magneticInit = "true";
                el.addEventListener('mouseenter', () => {
                    ring.classList.add('magnetic-active');
                    dot.classList.add('magnetic-hide');
                });
                el.addEventListener('mouseleave', () => {
                    ring.classList.remove('magnetic-active');
                    dot.classList.remove('magnetic-hide');
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
