window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});

const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav_links');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});