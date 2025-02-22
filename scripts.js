// scripts.js

// Открытие и закрытие бокового меню
const menuButton = document.querySelector(".menu-button");
const closeMenu = document.querySelector(".close-menu");
const sidebar = document.querySelector(".sidebar");

menuButton.addEventListener("click", function () {
    sidebar.classList.add("open");
});

closeMenu.addEventListener("click", function () {
    sidebar.classList.remove("open");
});
