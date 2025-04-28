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
