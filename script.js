document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. Navbar Scroll Effect --- */
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* --- 2. Mobile Burger Menu Toggle --- */
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-container'); 
    
    if(burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    /* --- 3. Smooth Scrolling Function --- */
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Close mobile menu if open
                nav.classList.remove('nav-active');
                if(burger) burger.classList.remove('toggle');

                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    // message me 
    /* --- Secret Lamp Logic --- */
const secretDeskSection = document.getElementById('secret-desk');
const lampSwitch = document.getElementById('lamp-toggle');

if (secretDeskSection && lampSwitch) {
    lampSwitch.checked = false;
    secretDeskSection.classList.remove('is-lit');

    lampSwitch.addEventListener('change', () => {
        secretDeskSection.classList.toggle('is-lit');
    });
}

    /* --- 4. Intersection Observer for Scroll Animations --- */
    const observerOptions = {
        root: null, 
        threshold: 0.15, 
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedSections = document.querySelectorAll('.fade-in-section');
    animatedSections.forEach(section => {
        observer.observe(section);
    });
});