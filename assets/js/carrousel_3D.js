document.addEventListener("DOMContentLoaded", () => {
  const stories = document.querySelectorAll(".carrousel_3d_item");
  let current = 0;

  function updatePositions() {
    stories.forEach((story, i) => {
      story.classList.remove("left", "center", "right");

      if (i === current) {
        story.classList.add("center");
        story.style.left = "50%";
        story.style.transform = "translateX(-50%) scale(1)";
      } else if (i === (current - 1 + stories.length) % stories.length) {
        story.classList.add("left");
        story.style.left = "25%";
        story.style.transform = "translateX(-50%) scale(0.6)";
      } else if (i === (current + 1) % stories.length) {
        story.classList.add("right");
        story.style.left = "75%";
        story.style.transform = "translateX(-50%) scale(0.6)";
      } else {
        story.style.left = "-9999px"; // fuera de pantalla
      }
    });
  }

  updatePositions();

  setInterval(() => {
    current = (current + 1) % stories.length;
    updatePositions();
  }, 3000);
});