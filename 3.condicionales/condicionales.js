let num = 10;
let fruta= "manzana";
let aniversario= 15;

//condicional if
if (num == 10){
    console.log("El número es: ", num);
} else{
    console.log("El número es diferente");
}

//condicional else if
if (fruta === "pera"){
    console.log("🍐");
} else if (fruta === "naranja"){
    console.log("🍊");
} else if (fruta === "platano") {
    console.log("🍌");
} else if (fruta === "sandia"){
    console.log("🍉");
} else if (fruta === "manzana"){
    console.log("🍎");
}

//condicional switch / case
switch(fruta){
    case 'pera':
        console.log("🍐");
        break;

    case 'naranja':
        console.log("🍊");
        break;

    case 'platano':
        console.log("🍌");
        break;

    case 'sandia':
        console.log("🍉");
        break;

    case 'manzana':
        console.log("🍎");
        break;
}

//condicional ternario / función if - else
aniversario <  30 ? console.log("Todavía falta") : console.log('Felicidades');
console.log(aniversario == 15 ? "Felicidades" : "Todavía falta" );

