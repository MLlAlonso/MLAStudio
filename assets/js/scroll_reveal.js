const items = document.querySelectorAll(".showcase-item");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Oculta todos
                items.forEach(item => item.classList.remove("active"));

                // Muestra solo el actual
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.5
    }
);

items.forEach(item => observer.observe(item));
