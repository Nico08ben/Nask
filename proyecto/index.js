const menu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('nav-enter');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('nav-enter', 'nav-exit');
    }
});