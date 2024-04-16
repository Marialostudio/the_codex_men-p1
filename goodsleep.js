'use strict';

const $botonVerMas = document.getElementById('buttonFirstSection');
console.log($botonVerMas);

$botonVerMas.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log("hizo click en el botón del formulario");
    alert("Gracias por tu interés, estamos trabajando para ofrecerte más información");
});