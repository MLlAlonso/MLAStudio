const trigger = document.querySelector(".lightbox-trigger");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox__close");

trigger.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = trigger.src;
});

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});