const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".nav-dot");

let current = 0;
let interval = null;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    current = index;
}

function nextSlide() {
    const next = (current + 1) % slides.length;
    showSlide(next);
}

function startAutoplay() {
    interval = setInterval(nextSlide, 8000);
}

function stopAutoplay() {
    clearInterval(interval);
}

dots.forEach(dot => {
    dot.addEventListener("mouseenter", () => {
        stopAutoplay();
        showSlide(parseInt(dot.dataset.index));
    });

    dot.addEventListener("mouseleave", startAutoplay);
});

startAutoplay();