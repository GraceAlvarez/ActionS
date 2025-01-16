document.addEventListener("DOMContentLoaded", function() {

    // Verifica si estamos en la página principal (ya sea index.html o la raíz '/')
    const isHomePage = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");

    // Siempre aplica el comportamiento de scroll al navbar
    const navbar = document.getElementById("navbar");
    if (navbar) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }

    // Si estamos en la página principal (index.html), realiza la animación
    if (isHomePage) {
        // Muestra la navbar y realiza la animación del panel lateral después de 1 segundo
        setTimeout(function() {
            var heroLeft = document.getElementById("heroLeft");
            if (heroLeft) {
                heroLeft.classList.add("visible");
            }
            if (navbar) {
                navbar.style.opacity = 1; // Muestra la navbar después de 1 segundo
            }
            // Desvanece el hero-content después de 1 segundo
            var heroContent = document.getElementById("heroContent");
            if (heroContent) {
                heroContent.classList.add("fade-out");
            }
        }, 1000);
    } else {
        // Si no estamos en la página de inicio, aseguramos que la navbar se muestre correctamente
        if (navbar) {
            navbar.style.opacity = 1; // Muestra la navbar si no estamos en la página principal
        }
    }
});
