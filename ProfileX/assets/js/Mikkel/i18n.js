
const I18n = (() => {

    // ==========================================
    // CONFIGURACIÓN
    // ==========================================
    const DEFAULT_LANGUAGE = "es";

    const SUPPORTED_LANGUAGES = ["es", "en"];

    const STORAGE_KEY = "mikkel-portfolio-language";

    let currentLanguage = DEFAULT_LANGUAGE;
    let translations = {};

    // ==========================================
    // OBTENER TRADUCCIÓN POR RUTA
    // ==========================================
    const getNestedValue = (object, path) => {

        return path
            .split(".")
            .reduce((value, key) => value?.[key], object);

    };

    // ==========================================
    // TRADUCIR PÁGINA
    // ==========================================
    const translatePage = () => {

        // ------------------------------------------
        // TRADUCIR TEXTOS
        // ------------------------------------------
        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key = element.dataset.i18n;
            const value = getNestedValue(translations, key);

            if (value !== undefined) {
                element.textContent = value;
            }

        });

        // ------------------------------------------
        // TRADUCIR CONTENIDO HTML CONTROLADO
        // ------------------------------------------
        document.querySelectorAll("[data-i18n-html]").forEach(element => {

            const key = element.dataset.i18nHtml;
            const value = getNestedValue(translations, key);

            if (value !== undefined) {
                element.innerHTML = value;
            }

        });

        // ------------------------------------------
        // TRADUCIR ATRIBUTOS CONTENT
        // ------------------------------------------
        document.querySelectorAll("[data-i18n-content]").forEach(element => {

            const key = element.dataset.i18nContent;
            const value = getNestedValue(translations, key);

            if (value !== undefined) {
                element.setAttribute("content", value);
            }

        });

        // ------------------------------------------
        // TRADUCIR ATRIBUTOS ALT
        // ------------------------------------------
        document.querySelectorAll("[data-i18n-alt]").forEach(element => {

            const key = element.dataset.i18nAlt;
            const value = getNestedValue(translations, key);

            if (value !== undefined) {
                element.setAttribute("alt", value);
            }

        });

        // ------------------------------------------
        // TRADUCIR ATRIBUTOS ARIA-LABEL
        // ------------------------------------------
        document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {

            const key = element.dataset.i18nAriaLabel;
            const value = getNestedValue(translations, key);

            if (value !== undefined) {
                element.setAttribute("aria-label", value);
            }

        });

        // ------------------------------------------
        // ACTUALIZAR IDIOMA DEL DOCUMENTO
        // ------------------------------------------
        document.documentElement.lang = currentLanguage;

        // ------------------------------------------
        // ACTUALIZAR BOTÓN DE IDIOMA
        // ------------------------------------------
        document.querySelectorAll("[data-language-toggle]").forEach(button => {

            const label = button.querySelector("[data-language-label]");

            const nextLanguage =
                currentLanguage === "es" ? "en" : "es";

            if (label) {
                label.textContent = nextLanguage.toUpperCase();
            }

            button.setAttribute(
                "aria-label",
                nextLanguage === "en"
                    ? "Switch to English"
                    : "Cambiar a español"
            );

            button.setAttribute(
                "aria-pressed",
                (currentLanguage === "en").toString()
            );

        });

        // ------------------------------------------
        // NOTIFICAR CAMBIO DE IDIOMA
        // ------------------------------------------
        document.dispatchEvent(
            new CustomEvent("languageChanged", {
                detail: {
                    language: currentLanguage
                }
            })
        );

    };

    // ==========================================
    // ESTABLECER IDIOMA
    // ==========================================
    const setLanguage = language => {

        if (!SUPPORTED_LANGUAGES.includes(language)) {
            return;
        }

        const languageTranslations =
            window.PORTFOLIO_TRANSLATIONS?.[language];

        if (!languageTranslations) {

            console.error(
                `Translations for "${language}" were not found.`
            );

            return;
        }

        translations = languageTranslations;
        currentLanguage = language;

        try {

            localStorage.setItem(STORAGE_KEY, language);

        } catch (error) {

            console.warn(
                "Unable to save language preference:",
                error
            );

        }

        translatePage();

    };

    // ==========================================
    // CAMBIAR ENTRE IDIOMAS
    // ==========================================
    const toggleLanguage = () => {

        const nextLanguage =
            currentLanguage === "es" ? "en" : "es";

        setLanguage(nextLanguage);

    };

    // ==========================================
    // INICIALIZAR I18N
    // ==========================================
    const init = () => {

        let savedLanguage = DEFAULT_LANGUAGE;

        try {

            savedLanguage =
                localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;

        } catch (error) {

            console.warn(
                "Unable to read language preference:",
                error
            );

        }

        if (!SUPPORTED_LANGUAGES.includes(savedLanguage)) {
            savedLanguage = DEFAULT_LANGUAGE;
        }

        // Registrar eventos del botón de idioma
        document.querySelectorAll("[data-language-toggle]").forEach(button => {

            button.addEventListener("click", toggleLanguage);

        });

        // Aplicar idioma guardado o predeterminado
        setLanguage(savedLanguage);

    };

    // ==========================================
    // API PÚBLICA
    // ==========================================
    return {

        init,

        setLanguage,

        toggleLanguage,

        getCurrentLanguage: () => currentLanguage

    };

})();

// ==========================================
// EXPONER I18N GLOBALMENTE
// ==========================================
window.I18n = I18n;

// ==========================================
// INICIALIZAR CUANDO EL DOM ESTÉ LISTO
// ==========================================
document.addEventListener("DOMContentLoaded", I18n.init);
