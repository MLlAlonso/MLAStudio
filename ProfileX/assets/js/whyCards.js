document.addEventListener("DOMContentLoaded", () => {
    const chips = document.querySelectorAll(".chip");
    const cards = document.querySelectorAll(".why_card");
    const container = document.querySelector(".why_cards");

    chips.forEach(chip => {
        chip.addEventListener("click", () => {
            const target = chip.dataset.target;
            chips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            container.classList.add("visible");
            container.classList.add("focused");

            cards.forEach(card => {
                card.classList.remove("active");
                if(card.dataset.card === target){
                    card.classList.add("active");
                }
            });

        });
    });
});