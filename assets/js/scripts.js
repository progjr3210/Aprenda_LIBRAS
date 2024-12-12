function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    const hamburgerIcon = document.getElementById("hamburger-icon");

    // Alternar a classe para exibir/ocultar o menu
    navLinks.classList.toggle("active");

    // Alterar o ícone
    if (navLinks.classList.contains("active")) {
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-times"); // Ícone de "X" para fechar
    } else {
        hamburgerIcon.classList.remove("fa-times");
        hamburgerIcon.classList.add("fa-bars"); // Ícone de "hamburger"
    }
}
