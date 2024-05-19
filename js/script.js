const navbarListEl = document.querySelector(".navbar__list"),
  navbarItemsEl = document.querySelectorAll(".navbar__item"),
  navbarToggleEl = document.querySelector(".navbar__toggle");

navbarToggleEl.addEventListener("click", () => {
  navbarListEl.classList.toggle("navbar__toggle--open");
});
Array.from(navbarItemsEl).forEach((navbarItem) => {
  navbarItem.addEventListener("click", () => {
    navbarListEl.classList.toggle("navbar__toggle--open");
  });
});
