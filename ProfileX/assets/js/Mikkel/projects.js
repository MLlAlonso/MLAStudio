
document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // ELEMENTOS DEL PORTAFOLIO
    // ==========================================
    const radios = document.querySelectorAll(
        'input[type="radio"][name="btn"]'
    );

    const cards = document.querySelectorAll(
        ".portfolio_container .expand_card"
    );

    const toggleBtn = document.getElementById("toggleProjects");

    const INITIAL_VISIBLE = 6;

    let expanded = false;
    let activeFilter = null;

    // ==========================================
    // CONFIGURACIÓN DE FILTROS
    // ==========================================
    const filters = {
        "value-1": "web",
        "value-2": "full-stack",
        "value-3": "backend",
        "value-4": "frontend"
    };

    // ==========================================
    // ACTUALIZAR TEXTO DEL BOTÓN SEGÚN IDIOMA
    // ==========================================
    function updateToggleButton(isExpanded) {
        if (!toggleBtn) return;

        const language = window.I18n?.getCurrentLanguage?.();

        const translations =
            window.PORTFOLIO_TRANSLATIONS?.[language];

        if (!translations?.portfolio) return;

        toggleBtn.textContent = isExpanded
            ? translations.portfolio.showLess
            : translations.portfolio.showMore;
    }

    // ==========================================
    // MOSTRAR PROYECTOS INICIALES
    // ==========================================
    function showInitialProjects() {

        cards.forEach((card, index) => {
            card.style.display =
                index < INITIAL_VISIBLE ? "" : "none";
        });

        expanded = false;
        activeFilter = null;

        if (toggleBtn) {
            toggleBtn.style.display =
                cards.length > INITIAL_VISIBLE ? "" : "none";

            updateToggleButton(false);
        }
    }

    // ==========================================
    // APLICAR FILTROS
    // ==========================================
    function applyFilter(filterKey) {

        activeFilter = filterKey;
        expanded = false;

        cards.forEach(card => {

            const types = (card.dataset.type || "").split(/\s+/);
            const matches = types.includes(filterKey);

            card.style.display = matches ? "" : "none";
        });

        // Ocultar botón mientras hay un filtro activo
        if (toggleBtn) {
            toggleBtn.style.display = "none";
        }
    }

    // ==========================================
    // EVENTOS DE FILTROS
    // ==========================================
    radios.forEach(radio => {

        radio.addEventListener("change", () => {

            if (!radio.checked) return;

            const filterKey = filters[radio.id];

            if (filterKey) {
                applyFilter(filterKey);
            }

        });

    });

    // ==========================================
    // VER MÁS / VER MENOS
    // ==========================================
    if (toggleBtn) {

        toggleBtn.addEventListener("click", () => {

            // Restablecer filtros
            activeFilter = null;

            radios.forEach(radio => {
                radio.checked = false;
            });

            expanded = !expanded;

            if (expanded) {

                // Mostrar todos los proyectos
                cards.forEach(card => {
                    card.style.display = "";
                });

            } else {

                // Mostrar solamente los primeros 6
                cards.forEach((card, index) => {
                    card.style.display =
                        index < INITIAL_VISIBLE ? "" : "none";
                });

            }

            // Actualizar texto según idioma activo
            updateToggleButton(expanded);

        });

    }

    // ==========================================
    // EVENTO DE CAMBIO DE IDIOMA
    // ==========================================
    document.addEventListener("languageChanged", () => {

        if (!toggleBtn) return;

        // No modificar el botón si hay un filtro activo
        if (activeFilter !== null) return;

        updateToggleButton(expanded);

    });

    // ==========================================
    // INICIALIZACIÓN
    // ==========================================
    showInitialProjects();

    // ==========================================
    // IMÁGENES DINÁMICAS PARA TARJETAS
    // ==========================================
    document.querySelectorAll(".expand_card").forEach(card => {

        const img = card.querySelector("img.bg-source");

        if (!img) return;

        const updateBackground = () => {

            card.style.setProperty(
                "--bg-img",
                `url("${img.currentSrc || img.src}")`
            );

        };

        if (img.complete && img.naturalWidth > 0) {
            updateBackground();
        } else {
            img.addEventListener("load", updateBackground, {
                once: true
            });
        }

    });

    // ==========================================
    // LIGHTBOX GLOBAL
    // ==========================================
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    const lightboxClose = lightbox
        ? lightbox.querySelector(".lightbox__close")
        : null;

    if (lightbox && lightboxImg && lightboxClose) {

        const images = document.querySelectorAll(".lightbox-trigger");

        // Abrir imagen
        images.forEach(image => {

            image.addEventListener("click", () => {

                lightboxImg.src = image.currentSrc || image.src;

                lightboxImg.alt =
                    image.alt || "Vista ampliada del proyecto";

                lightbox.classList.add("active");

                document.body.style.overflow = "hidden";

            });

        });

        // Cerrar lightbox
        function closeLightbox() {

            lightbox.classList.remove("active");

            lightboxImg.src = "";
            lightboxImg.alt = "";

            document.body.style.overflow = "";

        }

        lightboxClose.addEventListener("click", closeLightbox);

        lightbox.addEventListener("click", event => {

            if (event.target === lightbox) {
                closeLightbox();
            }

        });

        // Cerrar con Escape
        document.addEventListener("keydown", event => {

            if (
                event.key === "Escape" &&
                lightbox.classList.contains("active")
            ) {
                closeLightbox();
            }

        });

    }

});
