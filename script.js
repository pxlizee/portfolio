document.addEventListener('DOMContentLoaded', () => {
    
    // --- KODE BARU UNTUK PRELOADER ---
    const preloader = document.getElementById('preloader');

    // Opsi 1: Sembunyikan setelah waktu tertentu (misal: 2 detik)
    // Cocok jika Anda ingin durasi animasi pasti.
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 2000); // 2000 milidetik = 2 detik

    /*
    // Opsi 2 (REKOMENDASI): Sembunyikan setelah semua konten web selesai dimuat
    // Ini cara yang lebih profesional. Hapus atau beri komentar pada Opsi 1 jika menggunakan ini.
    window.addEventListener('load', () => {
        preloader.classList.add('hidden');
    });
    */
});
document.addEventListener('DOMContentLoaded', () => {

    // Fungsi 1: Smooth scrolling untuk navigasi (kecuali link kontak)
    document.querySelectorAll('a[href^="#"]:not(#contact-link)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fungsi 2: Animasi scroll-in (Intersection Observer)
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Fungsi 3: Menampilkan dan menyembunyikan pop-up kontak
    const contactLink = document.getElementById('contact-link');
    const contactPopupOverlay = document.getElementById('contact-popup-overlay');
    const contactPopupContainer = document.querySelector('.contact-popup-container');

    if (contactLink && contactPopupOverlay) {
        // Tampilkan pop-up
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            contactPopupOverlay.classList.add('show');
        });

        // Sembunyikan pop-up saat mengklik area overlay
        contactPopupOverlay.addEventListener('click', (e) => {
            if (e.target === contactPopupOverlay) {
                contactPopupOverlay.classList.remove('show');
            }
        });
    }
});