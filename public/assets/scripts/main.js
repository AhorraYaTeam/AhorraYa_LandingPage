document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript cargado correctamente.");
});
function toggleProfileMenu() {
    const menu = document.getElementById("profile-menu");
    menu.classList.toggle("show");
}

// Opcional: Cierra el menú al hacer clic fuera de él
window.addEventListener("click", function (e) {
    const menu = document.getElementById("profile-menu");
    const profileImg = document.querySelector(".profile-img");
    if (!menu.contains(e.target) && e.target !== profileImg) {
        menu.classList.remove("show");
    }
});
