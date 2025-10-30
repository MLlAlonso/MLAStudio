    // Esperar a que el DOM esté cargado
    document.addEventListener("DOMContentLoaded", () => {
        const radios = document.querySelectorAll('input[type="radio"][name="btn"]');
        const cards = document.querySelectorAll('.portfolio_container .card');

        // Mapeo de IDs a palabras clave de filtrado
        const filters = {
            'value-0': 'general',
            'value-1': 'web',
            'value-2': 'full-stack',
            'value-3': 'backend',
            'value-4': 'frontend'
        };

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

        // Dispara el filtro por defecto al cargar la página
        document.querySelector('input[type="radio"][name="btn"]:checked').dispatchEvent(new Event('change'));
    });

    document.querySelectorAll('.card').forEach(card => {
            const img = card.querySelector('img.bg-source');
            if (img) {
                card.style.setProperty('--bg-img', `url('${img.src}')`);
            }
        });