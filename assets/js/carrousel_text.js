document.addEventListener("DOMContentLoaded", () => {
    const captions = document.querySelectorAll(".caption_text h3");
    let index = 0;

    const showNext = () => {
        const current = captions[index];
        const nextIndex = (index + 1) % captions.length;
        const next = captions[nextIndex];

        // Sale el actual
        current.classList.remove("active");
        current.classList.add("exit");

        // Entra el siguiente
        setTimeout(() => {
            current.classList.remove("exit");
            next.classList.add("active");
            index = nextIndex;
        }, 600);
    };

    // Mostrar el primero al iniciar
    captions[0].classList.add("active");

    // Cambiar cada 4 segundos
    setInterval(showNext, 4000);
});