document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".resume__timeline-item");

    function handleScroll() {
        items.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (itemPosition < screenHeight * 0.85) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});