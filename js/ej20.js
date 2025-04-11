import { capitalMap } from "./utils.js";
import { mostrarMensaje } from "./utils.js";
import { actualizarDesplegable } from "./utils.js";

// Seleccionar elementos
const paises = document.querySelector("#paises");
const capitales = document.querySelector("#capitales");

// Agregar evento de cambio
paises.addEventListener("change", () => {
  const pais = paises.value;
  actualizarDesplegable(capitales, capitalMap[pais]);
  mostrarMensaje(`País: ${pais}, Capital: ${capitales.value}`);
});