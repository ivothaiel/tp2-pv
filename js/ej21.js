import { actualizaTexto } from "./utils.js";

// Seleccionar elementos
const entrada = document.querySelector("#entrada");
const salida = document.querySelector("#salida");

// Agregar evento de entrada
entrada.addEventListener("input", () => {
  actualizaTexto(salida, entrada.value || "Texto aparecerá aquí");
});