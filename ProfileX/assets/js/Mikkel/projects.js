document.addEventListener("DOMContentLoaded", () => {
    const radios = document.querySelectorAll('input[type="radio"][name="btn"]');
    const cards = document.querySelectorAll('.portfolio_container .expand_card');

    // Mapeo de IDs a palabras clave de filtrado
    const filters = {
        'value-0': 'general',
        'value-1': 'web',
        'value-2': 'full-stack',
        'value-3': 'backend',
        'value-4': 'frontend'
    };

    // 🔹 Ocultar todos los proyectos al inicio
    cards.forEach(card => card.style.display = "none");

    // 🔹 Quitar selección inicial de los radio buttons
    radios.forEach(radio => radio.checked = false);

    // 🔹 Escuchar cambios en los botones
    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            const selectedId = radio.id;
            const filterKey = filters[selectedId];

            cards.forEach(card => {
                const type = card.getAttribute("data-type");
                if (type.includes(filterKey)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});

// 🔹 Si estás usando imágenes de fondo dinámicas
document.querySelectorAll('.expand_card').forEach(card => {
    const img = card.querySelector('img.bg-source');
    if (img) {
        card.style.setProperty('--bg-img', `url('${img.src}')`);
    }
});
