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

    /* --- 5. Typewriter Animation Logic --- */
    function typeText(element, text, speed) {
        return new Promise((resolve) => {
            let i = 0;
            element.textContent = '';
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    resolve();
                }
            }
            type();
        });
    }

    async function startHeroAnimations() {
        const nameEl = document.getElementById('tp-name');
        const subtitleEl = document.getElementById('tp-subtitle');
        const aboutEl = document.getElementById('tp-about');
        
        const nameCursor = document.getElementById('name-cursor');
        const subtitleCursor = document.getElementById('subtitle-cursor');
        const aboutCursor = document.getElementById('about-cursor');
        const detailsContainer = document.getElementById('hero-details');

        if (!nameEl) return;

        // Step 1: Type Yaser Husen
        await typeText(nameEl, "YASER HUSEN", 150);
        nameCursor.classList.add('hidden');

        // Step 2: Show subtitle cursor & Type subtitle
        if (subtitleEl && subtitleCursor) {
            subtitleCursor.classList.remove('hidden');
            await typeText(subtitleEl, "Data Analyst & AI Integration Specialist", 100);
            subtitleCursor.classList.add('hidden');
        }

        // Step 3: Reveal details container layout smoothly
        if (detailsContainer) {
            detailsContainer.classList.add('reveal');
        }

        // Step 4: Show about text cursor & Type about block
        if (aboutEl && aboutCursor) {
            aboutCursor.classList.remove('hidden');
            await typeText(aboutEl, "I leverage Advanced SQL, Python, and AI to build scalable solutions with speed and precision.", 65);
            // Keep the aboutCursor visible so it continues to blink after sentence completion
        }
    }

    startHeroAnimations();
});