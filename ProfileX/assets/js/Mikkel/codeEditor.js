const codes = [
    {
        lang: "php",
        content: `<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class WelcomeController extends Controller {
    public function index() {
    return "If you can imagine it, I can develop it";
    }
}`
    }
];

function typeCode() {
    const codeContainer = document.getElementById("code-container");
    const { lang, content } = codes[0];

    // Resetear el contenido y la clase del código
    codeContainer.innerHTML = "";
    codeContainer.className = `language-${lang}`;

    let i = 0;
    function typeEffect() {
        if (i < content.length) {
            codeContainer.innerHTML += content.charAt(i);
            i++;
            setTimeout(typeEffect, 25); // Velocidad de escritura
        } else {
            Prism.highlightElement(codeContainer);
        }
    }

    typeEffect();
}

document.addEventListener("DOMContentLoaded", () => {
    typeCode();
    setInterval(typeCode, 120000); // Reiniciar la animación
});