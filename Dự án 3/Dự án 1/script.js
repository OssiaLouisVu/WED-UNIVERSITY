window.addEventListener('DOMContentLoaded', () => {
    // Toggle menu mobile
    const menu = document.getElementById('mobileNav');
    const toggleBtn = document.querySelector('.hamburger-menu');
    if (toggleBtn && menu) {
        toggleBtn.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
    }

    // Hover hiện địa danh
    const locations = ['hanoi', 'hochiminh', 'danang'];
    locations.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('mouseenter', () => el.classList.add('clicked'));
            el.addEventListener('mouseleave', () => el.classList.remove('clicked'));
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.testimonial-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    const itemsPerSlide = 3;
    const cardWidth = cards[0].offsetWidth;
    const totalItems = cards.length;
    const totalSlides = Math.ceil(totalItems / itemsPerSlide);

    let currentIndex = 0;

    function updateSlide() {
        track.style.transform = `translateX(-${currentIndex * cardWidth * itemsPerSlide}px)`;
    }

    next.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
    });

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide();
    });
});