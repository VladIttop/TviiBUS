// const menuToggle = document.querySelector(".nav-menu__toggle");
// let list = document.querySelector(".header-right-list");

// menuToggle.addEventListener("click", () => {
// list.style.display = "block";
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".nav-menu__toggle");
  const menu = document.querySelector(".header-right-list");
  const closeMenu = document.querySelector(".nav-menu__icon");

  menuIcon.addEventListener("click", function () {
    menu.classList.toggle("show");
    closeMenu.style.display = "block";
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("show");
    closeMenu.style.display = "none";
  });
});
