document.addEventListener('DOMContentLoaded', () => {

    // Fungsi 1: Smooth scrolling untuk navigasi
    document.querySelectorAll('a[href^="#"]:not(#contact-link)').forEach(anchor =>  {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fungsi 2: Animasi scroll (Intersection Observer)
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Fungsi 3: Menampilkan dan menyembunyikan pop-up kontak
    const contactLink = document.getElementById('contact-link');
    const contactPopupOverlay = document.getElementById('contact-popup-overlay');
    const contactPopupContainer = document.querySelector('.contact-popup-container');

    if (contactLink && contactPopupOverlay) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            contactPopupOverlay.classList.add('show');
        });

        // Menutup pop-up saat mengklik di luar area pop-up
        contactPopupOverlay.addEventListener('click', (e) => {
            if (!contactPopupContainer.contains(e.target)) {
                contactPopupOverlay.classList.remove('show');
            }
        });
    }

});