//Ejercicio 1

const textoInicial = document.getElementById("texto-inicial");
textoInicial.textContent = "Me llamo David y tengo 45 cachopos.";

//Ejercicio 2

const textoColor = document.getElementById("texto-color");
textoColor.style.color = "red";

//Ejercicio 3

const lista = document.getElementById("lista-elementos");
lista.innerHTML = "<li>Harina</li><li>Arroz</li><li>Pan rallado</li>";

//Ejercicio 4

const arrayNombre = ["David", "Ivan", "Julia", "Antonio", "Carlos", "Monica", "Marcos", "Juan", "Javier", "Lucía"];

function imprimirArray(array) {
    const lista = document.getElementById("array-nombres");
    lista.innerHTML += "<h4>Lista de nombres</h4>";
    lista.innerHTML += "<ul>";
    for(i=0; i<array.length; i++) {
        lista.innerHTML += "<li>"+array[i]+"</li>";
    }
    lista.innerHTML += "</ul>";
}

imprimirArray(arrayNombre);

//Ejercicio 5

const arrayNum = [ 4, 3, 4, 10, 40, 4];

function elementosArray(array) {
    const contenido = document.getElementById("array-numeros");
    contenido.textContent += "Lista de números: [" + array + "] | "
    contenido.textContent += "Numero de elementos: " + array.length;
}

elementosArray(arrayNum);

//Ejercicio 6



//Ejercicio 7

//Ejercicio 8

//Ejercicio 9

//Ejercicio 10

//Ejercicio 11

//Ejercicio 12

//Ejercicio 13

//Ejercicio 14

//Ejercicio 15

//Ejercicio 16

//Ejercicio 17

//Ejercicio 18

//Ejercicio 19

//Ejercicio 20