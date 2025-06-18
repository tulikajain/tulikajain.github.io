// Burger Menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents document click from firing
        nav.classList.toggle('active');
        burger.classList.toggle('active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target) && !burger.contains(event.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
            burger.classList.remove('active');
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    });
});

// Commented out unused code
// window.addEventListener('scroll', function() {
//     const parallaxElement = document.querySelector('.call-to-action');
//     let scrolled = window.scrollY;
//     parallaxElement.style.transform = 'translateY(' + scrolled * 0.2 + 'px)';
// });
