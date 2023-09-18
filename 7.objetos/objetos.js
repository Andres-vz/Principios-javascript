//guardar información estructurada basado en una propiedad y un valor

let obj1 = {
    titulo: "Aprendiendo JavaScript",
    fecha: "15/09/2023",
};

let obj2 = {
    titulo: "Aprendiendo Python",
};

let obj3 = {...obj2};
obj3.titulo = "Aprendiendo CSS";
console.log(obj3, obj2);

//recorrido
//extraer propiedad
for(prop in obj1){
    //console.log(prop); //obtener nombre de la propiedad
    console.log(obj1[prop]); //obtener el valor de la propiedad
}

//operador ?. para verificar si existe una propiedad
console.log(obj1.id?.nombre);