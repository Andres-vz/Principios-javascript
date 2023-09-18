function op1(){
    console.log("Hola 1");
}

function op2(){
    console.log("Hola 2");
}

function op3(){
    console.log("Hola 3");
}

function op4(number){
    return new Promise((resolve, reject) =>{
        if (number ==5){
            reject("Número incorrecto"); //hará que la aplicación truene
        }
        console.log("Hola 4");
        resolve("Número correcto"); //
    })

}

op1();
//then permite ejecutar código cuando la promesa se resuelve
//catch se va a ejecutar cuando nuestra promesa no se resolvió correctamente
op4(5).then((mensaje) =>{
    console.log(mensaje);
})
.catch((error) =>{
    console.log(error)
});
op2();
op3();

//función asíncrona
async function mensajes(){
    op1();
    //estructura de control para atrapar errores
    try {
        const resultado = await op4(5);
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
    op2();
    op3();
}

mensajes();