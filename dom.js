//DOM
//definir una constante
const btn = document.querySelector('#button');


//asignar atributo
btn.setAttribute('type', 'submit');
//null, objeto que está vacío
console.log(btn.getAttribute("type"));

//agregar evento, call back
//función de flecha
btn.addEventListener('click',() =>{
    const container = document.querySelector('#container');

    const btn2 = document.createElement('button');
    btn2.type = 'reset';
    btn2.append(document.createTextNode('Segundo boton'));

    container.appendChild(btn2);
});