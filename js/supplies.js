// script.js
document.getElementById('contactButton').addEventListener('click', () => {
    alert('¡Gracias por tu interés! Nuestro equipo se pondrá en contacto contigo pronto.');
  });
  
  // Efecto al cargar el botón
  const button = document.getElementById('contactButton');
  button.style.transform = 'scale(0.8)';
  setTimeout(() => {
    button.style.transition = 'transform 0.4s ease-out';
    button.style.transform = 'scale(1)';
  }, 500);
  