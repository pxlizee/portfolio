// Menunggu seluruh konten halaman dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', () => {

    // --- PRELOADER ---
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Sembunyikan preloader setelah 2.2 detik
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 2200);
    }

    // --- EFEK KETIK PADA HERO SECTION ---
    const typingEffectElement = document.querySelector('.typing-effect');
    if (typingEffectElement) {
        const text = typingEffectElement.textContent;
        typingEffectElement.textContent = '';
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                typingEffectElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 120);
            }
        }
        // Mulai efek ketik setelah preloader selesai
        setTimeout(typeWriter, 2500);
    }

    // --- KONTROL VIDEO BACKGROUND ---
    const backgroundVideo = document.querySelector('.background-video');
    const videoControlButton = document.getElementById('video-control-btn');
    if (backgroundVideo && videoControlButton) {
        videoControlButton.addEventListener('click', () => {
            if (backgroundVideo.paused) {
                backgroundVideo.play();
                videoControlButton.classList.remove('paused');
            } else {
                backgroundVideo.pause();
                videoControlButton.classList.add('paused');
            }
        });
    }

    // --- SMOOTH SCROLL UNTUK NAVIGASI (Selain link Kontak) ---
    document.querySelectorAll('a[href^="#"]:not(#contact-link):not(#hero-contact-btn)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- EFEK FADE-IN SAAT SECTION MUNCUL DI LAYAR ---
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- POPUP KONTAK (SUDAH DIPERBARUI DENGAN LOGIC SCROLL LOCK) ---
    const contactLink = document.getElementById('contact-link');
    const contactPopup = document.getElementById('contact-popup-overlay');
    const heroContactBtn = document.getElementById('hero-contact-btn');
    
    // Fungsi untuk membuka popup
    const openContactPopup = (e) => {
        e.preventDefault();
        contactPopup.classList.add('show');
        document.body.classList.add('no-scroll'); // Kunci scroll di body
    };

    // Fungsi untuk menutup popup
    const closeContactPopup = () => {
        contactPopup.classList.remove('show');
        document.body.classList.remove('no-scroll'); // Buka kembali scroll di body
    };

    if (contactPopup) {
        // Event listener untuk link di navigasi
        if (contactLink) {
            contactLink.addEventListener('click', openContactPopup);
        }

        // Event listener untuk tombol di hero section
        if (heroContactBtn) {
            heroContactBtn.addEventListener('click', openContactPopup);
        }

        // Event listener untuk menutup popup saat area overlay diklik
        contactPopup.addEventListener('click', (e) => {
            if (e.target === contactPopup) {
                closeContactPopup();
            }
        });
    }

    // --- MENU HAMBURGER (SUDAH DIPERBARUI) ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.querySelector('.nav-links');
    const navMenuLinks = document.querySelectorAll('.nav-links li a'); // Ambil semua link di dalam menu

    if (hamburgerBtn && navLinks) {
        // Fungsi untuk membuka/menutup menu
        const toggleMenu = () => {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open'); // Menambah/menghapus class untuk overlay
        };

        hamburgerBtn.addEventListener('click', toggleMenu);

        // **BARU**: Tambahkan event listener ke setiap link di menu
        navMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Jika menu sedang terbuka, tutup menu
                if (navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }
});