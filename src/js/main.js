document.addEventListener("DOMContentLoaded", () => {
  const burgerMenuButton = document.querySelector(".burger");
  const closeBurgerButton = document.querySelector(".close-burger");
  const modal = document.querySelector(".modal");
  const burgerNav = document.querySelector(".burger-nav");

  burgerMenuButton.addEventListener("click", () => {
    burgerMenuButton.classList.add("hidden");
    modal.classList.remove("translate-y-[-200px]");
  });

  closeBurgerButton.addEventListener("click", () => {
    modal.classList.add("translate-y-[-200px]");
    burgerMenuButton.classList.remove("hidden");
  });

  const track = document.getElementById("testimonial-slider-track");
  const slides = Array.from(track?.children || []);
  const nextButton = document.getElementById("next-testimonial");
  const prevButton = document.getElementById("prev-testimonial");

  if (!track || slides.length === 0 || !nextButton || !prevButton) {
    if (prevButton) prevButton.style.display = "none";
    if (nextButton) nextButton.style.display = "none";
    console.warn(
      "Testimonial slider elements not found or no slides. Slider disabled.",
    );
    return;
  }

  let slideWidth = 0;
  let currentIndex = 0;
  let isResizing = false;

  function calculateSlideWidth() {
    slideWidth = slides[0].offsetWidth;
    const gapStyle = window.getComputedStyle(track).gap;
    const gapValue =
      gapStyle && gapStyle !== "normal" ? Number.parseFloat(gapStyle) || 0 : 0;
    slideWidth += gapValue;
  }

  function applyTransform() {
    const newTransform = -slideWidth * currentIndex;
    track.style.transform = `translateX(${newTransform}px)`;
  }

  function moveToSlide(targetIndex) {
    if (targetIndex < 0) {
      targetIndex = slides.length - 1;
    } else if (targetIndex >= slides.length) {
      targetIndex = 0;
    }
    currentIndex = targetIndex;
    applyTransform();
  }

  function handleResize() {
    isResizing = true;
    track.style.transition = "none";
    calculateSlideWidth();
    applyTransform();

    setTimeout(() => {
      track.style.transition = "transform 0.5s ease-in-out";
      isResizing = false;
    }, 50);
  }

  calculateSlideWidth();
  applyTransform();
  setTimeout(() => {
    track.style.transition = "transform 0.5s ease-in-out";
  }, 0);

  nextButton.addEventListener("click", () => {
    if (isResizing) return;
    moveToSlide(currentIndex + 1);
  });

  prevButton.addEventListener("click", () => {
    if (isResizing) return;
    moveToSlide(currentIndex - 1);
  });

  window.addEventListener("resize", handleResize);
});
