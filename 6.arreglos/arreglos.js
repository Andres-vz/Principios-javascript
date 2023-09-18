//inicia en posición 0
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

console.log(arr1[4]);

//ligar los valores de un arreglo con otro
// arr1 = arr2;
// arr2[1] = 200;
// console.log(arr1, arr2);

//operador de desparcimiento
arr1 = [...arr2];
arr2[1] = 200;
console.log(arr1, arr2);

//métodos
arr1.forEach(function(elemento, indice){
    console.log(elemento, indice);
});

const arr3 = arr1.map(function(elemento, indice){
    return elemento + "-" + indice;
});

//extraer el último elemento del arreglo
arr3.pop();

//agregar nuevo elemento
arr3.push(9);
console.log(arr3);


//recorrido por arreglos con ciclo
const arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++ ){
    console.log(arr[i]);
}
