//actualiza el texto de un elemento en el DOM
export const actualizarTexto = (elemento, Nuevotexto) => {
    elemento.textContent = Nuevotexto;
}

//agrega o quita una clase css segun una condicion
export const alternarClase = (elemento, clase, condicion) => {
    if (condicion) {
        elemento.classList.add(clase);
    } else {
        elemento.classList.remove(clase);
    }
};

//obtiene un elemento aleatorio de un arreglo
export const getRandomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

//registra el mensaje por consola
export const mostrarMensaje = (mensaje) => {
    console.log(mensaje);
};

export const actualizarDesplegable = (desplegable, valor) => {
    desplegable.value = valor;
};
export const formatearAlerta = (name, surname, idnumber) => {
    return `Los datos ingresados son:\nNombre: ${name}\nApellido: ${surname}\nLibreta Universitaria: ${idnumber}`;
};

//mapeo de paises a capitales
export const capitalMap = {
    Argentina: "Buenos Aires",
    Brasil: "Brasilia",
    Chile: "Santiago",
    Colombia: "Bogota",
    Mexico : "Ciudad de Mexico",
    Peru: "Lima",
};


