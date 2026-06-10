document.addEventListener("DOMContentLoaded", () => {
    const radios = document.querySelectorAll( 'input[type="radio"][name="btn"]');
    const cards = document.querySelectorAll( '.portfolio_container .expand_card');
    const toggleBtn = document.getElementById( "toggleProjects");

    let expanded = false;

    const filters = {
        'value-1': 'web',
        'value-2': 'full-stack',
        'value-3': 'backend',
        'value-4': 'frontend'
    };

    // Mostrar primeros 6
    cards.forEach((card, index) => {
        card.style.display =
            index < 6
                ? "block"
                : "none";
    });

    // Filtros
    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            const filterKey = filters[radio.id];

            cards.forEach(card => {
                const type = card.dataset.type;

                card.style.display =
                    type.includes(filterKey)
                        ? "block"
                        : "none";

            });

            toggleBtn.style.display = "none";
        });

    });

    // VER MÁS
    toggleBtn.addEventListener("click", () => {
        expanded = !expanded;

        if (expanded) {
            cards.forEach(card => {
                card.style.display = "block";
            });

            toggleBtn.textContent = "Ver menos proyectos";
        } else {
            cards.forEach((card, index) => {
                card.style.display =
                    index < 6
                        ? "block"
                        : "none";

            });

            toggleBtn.textContent = "Ver más proyectos";
        }

        radios.forEach(radio => { radio.checked = false; });

    });

});

// Imágenes dinámicas
document.querySelectorAll('.expand_card').forEach(card => {
    const img = card.querySelector('img.bg-source');

    if (img) {
        card.style.setProperty(
            '--bg-img',
            `url('${img.src}')`
        );
    }
});