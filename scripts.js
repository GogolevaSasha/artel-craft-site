// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.createElement("button");
    menuButton.innerHTML = "☰";
    menuButton.classList.add("menu-button");
    document.body.appendChild(menuButton);

    const nav = document.querySelector("nav");
    if (!nav) {
        console.error("Меню (nav) не найдено!");
        return;
    }

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("open");
    });

    const closeButton = document.createElement("span");
    closeButton.innerHTML = "✖";
    closeButton.classList.add("close-menu");
    nav.prepend(closeButton);

    closeButton.addEventListener("click", function () {
        nav.classList.remove("open");
    });
});
