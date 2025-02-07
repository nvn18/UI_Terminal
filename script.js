// Slideshow Automatic Transition and Dot Navigation
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
    currentSlide = index;
    updateDots(index);
}

setInterval(() => {
    let nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
}, 3000);

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-index'));
        showSlide(index);
    });
});

// IntersectionObserver for .detail-box animations
const detailBoxes = document.querySelectorAll('.detail-box');
const observerOptions = { threshold: 0.3 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const detailBox = entry.target;

        if (detailBox.classList.contains('ceo-detail-box')) {
            // Keep .in-view for CEO section
            if (entry.isIntersecting) {
                detailBox.classList.add('in-view');
            }
        } else {
            if (entry.isIntersecting) {
                // Add .in-view when detail-box is in view
                detailBox.classList.add('in-view');
                detailBox.classList.remove('out-of-view');
            } else {
                // Add .out-of-view when detail-box goes out of view
                detailBox.classList.remove('in-view');
                detailBox.classList.add('out-of-view');
            }
        }
    });
}, observerOptions);

detailBoxes.forEach(detailBox => observer.observe(detailBox));

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    newsletterForm.reset();
});