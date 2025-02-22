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

// Переключение вкладок на странице компании
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            this.classList.add("active");
            document.getElementById(this.dataset.tab).classList.add("active");
        });
    });
});
