const codes = [
    {
        lang: "php",
        content: `<?php

namespace App\Http\Controllers;

class WelcomeController extends Controller
{
    public function index(): string
    {
        $developer = "Mikkel Llaven Alonso";
        $mission = "turning ideas into digital products";

        return "{$developer}: Full Stack Software Engineer focused on {$mission} through clean architecture, scalable systems and exceptional user experiences.";
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