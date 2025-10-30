document.addEventListener('DOMContentLoaded', () => {
    const levelCards = document.querySelectorAll('.level-card');

    levelCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceCard = card.closest('.service-card');
            const level = card.dataset.level;
            const detailsElement = card.querySelector('.level-details');

            // Oculta todos los detalles del mismo servicio
            serviceCard.querySelectorAll('.level-details').forEach(details => {
                details.style.display = 'none';
            });
            
            // Muestra solo los detalles de la tarjeta clicada
            detailsElement.style.display = 'block';
        });
    });
});