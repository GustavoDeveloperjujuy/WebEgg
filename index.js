
// algunNombre(4, 5); 

// function algunNombre (num1, num2){
// 	let a = num1 / num2;
// 	return a;
// }
// let resultado = algunNombre(5, 2);
// console.log(resultado);

///////////////////////////////////////////
 //esta parte cambiar el logo a hola.
// let contenidoNuevotitulo = "Mi Web";
// let titulo = document.querySelector(".logo");

// titulo.innerHTML = contenidoNuevotitulo;
// let textoTitulo = titulo.innerHTML;
// console.log(textoTitulo);
// if(textoTitulo == "Mi Web"){
//     titulo.innerHTML = "hola"
// }

///////////////////////////////////////////
//esta seccion cambiara el texto principal de la web

// let nombre = "Gustavo";
// let edad = "28";
// let gustos = "dormir";

// let parrafoTitulo1 = document.querySelector(".texto-titulo1");

// function modificarTitulo1 (nombre, edad, gustos){
//     let contenido = `Me llamo ${nombre}, tengo ${edad} años y mis gustos personales son ${gustos}. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`; 
    
//     return contenido;
// }
// parrafoTitulo1.innerHTML = modificarTitulo1(nombre, edad, gustos);

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let validoNombre = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings = `El nombre debe contener más de 4 carcateres`;
    validoNombre = false;
  }
  if (validoNombre == false) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return validoNombre; // si el nombre tiene menos de 4 
  //letras regresa falso
}


form.addEventListener("submit", (e) => {
  if (validarFormulario()) { //verdadero
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

function validarEmail() {
  let warningsEmail = "";
  let validoEmail = true;
  parrafo.innerHTML = "";

if (email.value.length < 4) {
  warningsEmail += `Ingrese un Email valido`;
  validoEmail = false;
}
if (validoEmail == false) {
  parrafo.innerHTML = warningsEmail;
} else {
  parrafo.innerHTML = "Enviado";
}
return validoEmail;

}
form.addEventListener("submit", (e) => {
  if (validarEmail()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});