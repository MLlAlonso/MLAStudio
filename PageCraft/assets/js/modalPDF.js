const pdfFile = "../assets/docs/CRUANPA/CATALAGO.pdf"; // <-- Ruta del PDF

function openPDF() {
    // Abrir modal
    document.getElementById('pdfModal').style.display = 'block';
    // Mostrar PDF en el iframe
    document.getElementById('pdfViewer').src = pdfFile;

    // Descargar automáticamente
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = "CATALOGO_2025_CRUANPA_COMERCIALIZADORA.pdf"; // nombre con el que se descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function closePDF() {
    document.getElementById('pdfModal').style.display = 'none';
}