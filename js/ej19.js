import { formatearAlerta } from "./utils.js";

// Seleccionar elementos
const boton = document.querySelector("#enviar");
const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const libretaInput = document.querySelector("#libreta");

// Agregar evento de clic
boton.addEventListener("click", () => {
  const mensaje = formatearAlerta(nombreInput.value, apellidoInput.value, libretaInput.value);
  alert(mensaje);
});