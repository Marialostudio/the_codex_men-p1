'use strict';

const $botonVerMas = document.getElementById('buttonFirstSection');
console.log($botonVerMas);

$botonVerMas.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log("hizo click en el botón del formulario");
    alert("Gracias por tu interés, estamos trabajando para ofrecerte más información");
});

// Get the form element
let form = document.getElementById('formulario');

// Add submit event listener
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    
    const nameValue = document.getElementById('boton_nombre').value;
    const email = document.getElementById('boton_email').value;
    const phone = document.getElementById('boton_telefono').value;
    const sickness = document.getElementById('boton_padecimiento').value;

    console.log({nameValue,email,phone,sickness})
    alert("Gracias por tu interés, pronto te contactaremos")
});
//const Formulario = document.getElementById('formulario');
//const Nombre = document.getElementById('boton_nombre').value;
//const Email = document.getElementById('boton_email').value;
//const Telefono = document.getElementById('boton_telefono').value;

/*const btnEnviar = document.getElementById('btnEnviar');
Formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let formData = new FormData(Formulario)
    let formValues = {}
    formData.forEach((value, key) => {
        console.log(value,key)
        formValues[key]=value
})

    console.log(formValues)
    console.log({evento});
    console.log("los datos son: "+Nombre+Email+Telefono)
    //alert("Gracias por tu interés, pronto te contactaremos.")
});*/