const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-scroll-gallery]").forEach((gallery) => {
  const track = gallery.querySelector("[data-scroll-track]");
  const nextButton = gallery.querySelector(".design-scroll-button:not(.design-scroll-button-left)");
  const prevButton = gallery.querySelector(".design-scroll-button-left");

  if (!track || !nextButton || !prevButton) {
    return;
  }

  nextButton.addEventListener("click", () => {
    track.scrollBy({
      left: Math.max(track.clientWidth * 0.82, 280),
      behavior: "smooth",
    });
  });

  prevButton.addEventListener("click", () => {
    track.scrollBy({
      left: -Math.max(track.clientWidth * 0.82, 280),
      behavior: "smooth",
    });
  });
});
