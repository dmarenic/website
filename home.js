document.addEventListener('DOMContentLoaded', () => {
    
    // --- LIGHTBOX LOGIKA ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    
    // Hvata sliku profila i sve slike u galeriji (ako ih budeš dodavao)
    const imagesToWatch = document.querySelectorAll('#profile-img, .gallery-item img');

    imagesToWatch.forEach(img => {
        img.addEventListener('click', () => {
            // Prikaži lightbox
            lightbox.style.display = 'flex';
            
            // Uzmi sliku visoke rezolucije iz data-full taga
            const highRes = img.getAttribute('data-full');
            lightboxImg.src = highRes;
        });
    });

    // Zatvori na klik na X
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Zatvori na klik bilo gdje izvan slike
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });

    // --- SMOOTH SCROLL ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});