import { actualizarTexto } from "./utils.js";

const boton = document.querySelector("#boton");
const parrafo = document.querySelector("#texto");

boton.addEventListener ("click", () => {
    actualizarTexto(parrafo, "¡Hola! Soy el NUEVO TEXTO");
});  