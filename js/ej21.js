import { actualizarTexto } from "./utils.js";

const entrada = document.querySelector("#entrada");
const salida = document.querySelector("#salida");

//escuchamos el evento de entrada
entrada.addEventListener("input", () => {
  //actualizamos el texto en el elemento de salida
  actualizarTexto(salida, entrada.value || "Texto");
  }); 