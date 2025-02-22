// scripts.js

// Открытие и закрытие бокового меню
const menuButton = document.querySelector(".menu-button");
const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    nav.classList.add("open");
});

closeMenu.addEventListener("click", function () {
    nav.classList.remove("open");
});

// Закрытие меню при клике вне его области, но не на вложенные элементы
document.addEventListener("click", function (event) {
    if (!nav.contains(event.target) && !menuButton.contains(event.target) && !event.target.closest("nav")) {
        nav.classList.remove("open");
    }
});

// Анимация появления элементов при скролле с проверкой на существование
const fadeElements = document.querySelectorAll(".fade-in");
if (fadeElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });
    
    fadeElements.forEach((el) => observer.observe(el));
}
