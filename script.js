document.addEventListener('DOMContentLoaded', () => {

    // --- FUNGSI PRELOADER ---
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 2200);
    }

    // --- FUNGSI TYPING EFFECT ---
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const textToType = typingElement.textContent;
        typingElement.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < textToType.length) {
                typingElement.textContent += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 120);
            }
        }
        setTimeout(typeWriter, 2500);
    }

    // --- FUNGSI KONTROL VIDEO ---
    const video = document.querySelector('.background-video');
    const videoControlBtn = document.getElementById('video-control-btn');
    if (video && videoControlBtn) {
        videoControlBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                videoControlBtn.classList.remove('paused');
            } else {
                video.pause();
                videoControlBtn.classList.add('paused');
            }
        });
    }

    // --- FUNGSI SMOOTH SCROLLING ---
    document.querySelectorAll('a[href^="#"]:not(#contact-link)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // --- FUNGSI ANIMASI FADE-IN SAAT SCROLL ---
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    sections.forEach(section => { observer.observe(section); });

    // --- FUNGSI POP-UP KONTAK ---
    const contactLink = document.getElementById('contact-link');
    const contactPopupOverlay = document.getElementById('contact-popup-overlay');
    if (contactLink && contactPopupOverlay) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            contactPopupOverlay.classList.add('show');
        });
        contactPopupOverlay.addEventListener('click', (e) => {
            if (e.target === contactPopupOverlay) {
                contactPopupOverlay.classList.remove('show');
            }
        });
    }

    // --- FUNGSI HAMBURGER MENU ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');
    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});