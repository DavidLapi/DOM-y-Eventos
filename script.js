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

const formulario = document.getElementById("formulario-basico");
formulario.innerHTML += "<h4>Formulario básico</h4>";
formulario.innerHTML += "<p>";
formulario.innerHTML += "<label for='nombre' id='nombre-label'>Nombre: </label>";
formulario.innerHTML += "<input type='text' id='nombre' name='nombre'>";
formulario.innerHTML += "</p>";
formulario.innerHTML += "<p>";
formulario.innerHTML += "<label for='edad' id='edad-label'>Edad: </label>";
formulario.innerHTML += "<input type='number' id='edad' name='edad'>";
formulario.innerHTML += "</p>";
formulario.innerHTML += "<input type='submit' value='Enviar'> ";
formulario.innerHTML += " <input type='reset' value='Reiniciar'>";

//Ejercicio 7

//Recordar arrayNombres
const tablaNombres = document.getElementById("tabla-nombres");

function crearTablaConArray(array) {
    //Comprobamos si hay elementos o no en el array
    if(array.length === 0) {
        tablaNombres.textContent = "No hay nombres a mostrar";
        return;
    } 

    let tablaHTML = `<thead>
        <tr>
            <th>Id</th>
            <th>Nombre</th>
        </tr>
    </thead>
    <tbody>`;

    for(i=0; i<array.length; i++) {
        tablaHTML += `<tr>
        <td>${i+1}</td>
        <td>${array[i]}</td>
        </tr>`
    }

    tablaHTML += "</tbody>";

    tablaNombres.innerHTML = tablaHTML;
}

crearTablaConArray(arrayNombre);

//Ejercicio 8

//Array de objetos
let arrayObj = [
    {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
    },
    { 
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
    },
    { 
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
    },
    { 
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
    },
    {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
    },
    { 
        "id": 6,
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
        "type": "",
        "gender": "Female",
    },
    { 
        "id": 7,
        "name": "Abradolf Lincler",
        "status": "unknown",
        "species": "Human",
        "type": "Genetic experiment",
        "gender": "Male",
    },
    { 
        "id": 8,
        "name": "Adjudicator Rick",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
    },
    { 
        "id": 9,
        "name": "Agency Director",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
    },
    { 
        "id": 10,
        "name": "Alan Rails",
        "status": "Dead",
        "species": "Human",
        "type": "Superhuman (Ghost trains summoner)",
        "gender": "Male",
    }
];

const tablaObjetos = document.getElementById("tabla-objeto");

function crearTablaConArrayDeObjetos(array) {
    //Comprobamos si hay elementos o no en el array
    if(array.length === 0) {
        tablaObjetos.textContent = "No hay nombres a mostrar";
        return;
    } 

    let tabla = `<thead>
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Especie</th>
            <th>Tipo</th>
            <th>Género</th>
        </tr>
    </thead>
    <tbody>
    `;

    for(elemento of array) {
        tabla += "<tr>";
        tabla += "<td>"+elemento.id+"</td>";
        tabla += "<td>"+elemento.name+"</td>";
        tabla += "<td>"+elemento.status+"</td>";
        tabla += "<td>"+elemento.species+"</td>";
        tabla += "<td>"+elemento.type+"</td>";
        tabla += "<td>"+elemento.gender+"</td>";
        tabla += "</tr>";
    }

    tabla += "</tbody>";

    tablaObjetos.innerHTML = tabla;
}

crearTablaConArrayDeObjetos(arrayObj);


//Ejercicio 9

const listaEliminacion = document.getElementById("lista-eliminacion");
const cantidadFrutas = document.getElementById("cantidad-frutas");

let frutas = [
    "🍎 Manzana", 
    "🍉 Sandía", 
    "🍌 Banana", 
    "🍇 Uva", 
    "🍈 Melón", 
    "🍍 Piña"
];

function eliminarElementos(array) {
    if (frutas.length === 0) {
        listaEliminacion.textContent = "Se acabó la lista";
    }

    for (element of array) {
        listaEliminacion.innerHTML += "<li>"+element+"</li>";
    }
}

eliminarElementos(frutas);


//Funcion para que escuche el boton

const elementos = listaEliminacion.querySelectorAll('li');
            
elementos.forEach(elemento => {
    // Remover listeners existentes para evitar duplicados
    elemento.removeEventListener('click', eliminarElemento);
    // Agregar el event listener
    elemento.addEventListener('click', eliminarElemento);
});


cantidadFrutas.textContent = "Cantidad de frutas: "+frutas.length;

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