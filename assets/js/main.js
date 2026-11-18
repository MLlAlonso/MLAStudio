(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var sleep = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };

  /* Palabra que se escribe en el título */
  var sw = document.getElementById("swap");
  var words = ["soluciones digitales.", "software a medida.", "páginas que venden.", "procesos automáticos."];

  /* Demo: idea -> sistema */
  var ideas = [
    { t: "Quiero controlar los pedidos y el inventario de mi negocio.", m: ["Panel de pedidos en tiempo real", "Inventario con alertas de stock", "Reportes de ventas automáticos"] },
    { t: "Paso horas pasando datos de un sistema a otro a mano.", m: ["Conexión entre tus servicios", "Procesos que se ejecutan solos", "Menos errores, más tiempo libre"] },
    { t: "Necesito mostrar mi trabajo y conseguir clientes.", m: ["Portafolio profesional con ProfileX", "Página de captación con PageCraft", "Identidad visual coherente"] }
  ];
  var idea = document.getElementById("idea");
  var mods = document.getElementById("mods");

  function render(i, full) {
    var d = ideas[i];
    idea.textContent = full ? d.t : "";
    mods.innerHTML = "";
    d.m.forEach(function (x) {
      var li = document.createElement("li");
      li.textContent = x;
      if (full) li.className = "on";
      mods.appendChild(li);
    });
  }

  if (reduce) {
    sw.textContent = words[0];
    render(0, true);
  } else {
    (async function () {
      var i = 0;
      while (true) {
        var w = words[i], c;
        for (c = 1; c <= w.length; c++) { sw.textContent = w.slice(0, c); await sleep(70); }
        await sleep(1700);
        for (c = w.length; c > 0; c--) { sw.textContent = w.slice(0, c - 1); await sleep(35); }
        i = (i + 1) % words.length;
      }
    })();
    (async function () {
      var i = 0;
      while (true) {
        render(i, false);
        var d = ideas[i], c;
        for (c = 1; c <= d.t.length; c++) { idea.textContent = d.t.slice(0, c); await sleep(26); }
        await sleep(450);
        var items = mods.children;
        for (var k = 0; k < items.length; k++) { items[k].className = "on"; await sleep(380); }
        await sleep(3300);
        i = (i + 1) % ideas.length;
      }
    })();
  }

  /* Aparición al hacer scroll */
  document.documentElement.classList.add("js");
  var els = document.querySelectorAll(".rv, #steps");
  if (!("IntersectionObserver" in window)) {
    els.forEach(function (e) { e.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* Enlace activo del menú */
  var links = [].slice.call(document.querySelectorAll(".nav__links a"));
  var secs = links.map(function (a) { return document.querySelector(a.getAttribute("href")); });
  function spy() {
    var y = window.scrollY + 130, cur = 0;
    secs.forEach(function (s, i) { if (s && s.offsetTop <= y) cur = i; });
    links.forEach(function (a, i) { a.classList.toggle("on", i === cur); });
  }
  addEventListener("scroll", spy, { passive: true });
  spy();
})();



/* Carrusel de proyectos */
(function () {
  var proj = document.querySelector(".proj");
  if (!proj) return;
  var track = proj.querySelector(".proj__track");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Duplicar los elementos para que el bucle no tenga cortes
  if (!reduce) {
    [].slice.call(track.children).forEach(function (n) {
      var c = n.cloneNode(true);
      c.setAttribute("aria-hidden", "true");
      c.tabIndex = -1;
      track.appendChild(c);
    });
  }

  // Si un logo no carga, se muestra el monograma
  track.querySelectorAll(".pj__logo img").forEach(function (img) {
    var box = img.parentNode;
    function fail() { box.classList.add("no-img"); }
    img.addEventListener("error", fail);
    if (img.complete && img.naturalWidth === 0) fail();
  });
})();