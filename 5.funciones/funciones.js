//parametro
function mostrarMensaje(name){
    console.log("Hola", name);
}

//valor del parametro
mostrarMensaje("Andrés");
mostrarMensaje("Mayra");
mostrarMensaje("Kenyana");
mostrarMensaje("Lied");

//return
function mostrarMensaje2(name){
    return "Cómo estás, " + name;
}

console.log(mostrarMensaje2("Andrés"));


//anidar una variable
function mostrarMensaje3(nombre){
    return `Hola ${nombre}`;
}

console.log(mostrarMensaje3("Lied"));

//función dentro de una función
function mostrarMensaje4(nombre){
    function transform(){
        return nombre.toUpperCase();
    }
    return transform();
}

console.log(mostrarMensaje4("andres"));