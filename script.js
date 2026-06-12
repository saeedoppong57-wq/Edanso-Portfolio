const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    if (window.innerWidth > 700) {
        return;
    }
    const isOpen = header.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
        header.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});