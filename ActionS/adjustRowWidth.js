// Función para manejar el cambio de clase cuando la sección entra en la vista
function adjustRowWidthOnScroll() {
    const sections = document.querySelectorAll('.section');  // Selecciona todas las secciones
    const rows = document.querySelectorAll('.section .row'); // Selecciona todas las filas

    // Recorre todas las secciones para ver cuál está visible
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();  // Obtiene la posición de la sección en la pantalla

        if (rect.top <= window.innerHeight && rect.bottom >= 0) { // Si la sección está en la vista
            // Añade la clase .row-expanded a la fila correspondiente
            rows[index].classList.add('row-expanded');
        } else {
            // Si la sección no está visible, elimina la clase
            rows[index].classList.remove('row-expanded');
        }
    });
}

// Llama a la función cuando se haga scroll
window.addEventListener('scroll', adjustRowWidthOnScroll);

// También ejecuta la función al cargar la página
document.addEventListener('DOMContentLoaded', adjustRowWidthOnScroll);
