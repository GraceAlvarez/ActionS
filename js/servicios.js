document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.services-carousel');
    const groups = document.querySelectorAll('.service-group');
    const totalGroups = groups.length;
    let currentGroupIndex = 0;

    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    function updateCarouselPosition() {
        // Mueve el carrusel a la posición correcta
        carousel.style.transform = `translateX(-${100 * currentGroupIndex}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentGroupIndex++;

        // Si llegamos al final de los grupos, volvemos al principio
        if (currentGroupIndex >= totalGroups) {
            currentGroupIndex = 0;
        }

        updateCarouselPosition();
    });

    prevButton.addEventListener('click', () => {
        currentGroupIndex--;

        if (currentGroupIndex < 0) {
            currentGroupIndex = totalGroups - 1;
        }

        updateCarouselPosition();
    });

    updateCarouselPosition(); // Inicializa la posición del carrusel
});
