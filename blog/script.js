const toggleBtn = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggleBtn.addEventListener('click', () => {
nav.classList.toggle('active');
});

function enviarFormulario(event) {
event.preventDefault(); // evita que se envíe de verdad
alert("Mensaje enviado (simulado)");
event.target.reset(); // limpia todos los campos del formulario
  }