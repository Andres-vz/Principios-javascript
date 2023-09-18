class Mensaje {
    #nombre; //propiedad privada
    constructor(){
        this.#nombre = 'Andrés';
        console.log("Constructor,", this.#nombre);
    }

    //método
    warning(mensaje){
        console.warn(mensaje);
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(value){
        this.#nombre = value;
    }
}

function Log() {

}

//instancia basada en la clase/funciones
const mensaje = new Mensaje();
mensaje.warning('Cuidado');
mensaje.nombre = 'Jesús';
console.log(mensaje.nombre);
const log = new Log();
