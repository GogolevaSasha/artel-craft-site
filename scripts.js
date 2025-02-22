document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const closeButton = document.querySelector(".close-menu");
    const sidebar = document.querySelector(".sidebar");

    menuButton.addEventListener("click", function () {
        sidebar.classList.add("open");
    });

    closeButton.addEventListener("click", function () {
        sidebar.classList.remove("open");
    });

    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
            sidebar.classList.remove("open");
        }
    });
});
