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
const botonRestablecer = document.getElementById("restablecer");

let frutas = [
    "🍎 Manzana", 
    "🍉 Sandía", 
    "🍌 Banana", 
    "🍇 Uva", 
    "🍈 Melón", 
    "🍍 Piña"
];

for (let fruta of frutas) {
    listaEliminacion.innerHTML += "<li>"+fruta+"</li>";
}

listaEliminacion.addEventListener("click", function(event) {
    //Verificar si se hizo click en la etiqueta li
    if (event.target.tagName === "LI") {
        //Elimina el elemento del DOM
        event.target.remove();
    }
});

botonRestablecer.addEventListener("click", function() {
    if (!listaEliminacion.querySelector('li')) {
        for (let fruta of frutas) {
            listaEliminacion.innerHTML += "<li>"+fruta+"</li>";
        }
    }
});

//Ejercicio 10

const campoTexto = document.getElementById("campo-texto");
const parrafoTexto = document.getElementById("parrafo-texto");

campoTexto.addEventListener("input", function() {
    parrafoTexto.textContent = campoTexto.value;
})

//Ejercicio 11

const botonOcultar = document.getElementById("boton-ocultar");
const parrafoOcultar = document.getElementById("parrafo-ocultar");

botonOcultar.addEventListener("click", function() {
    if (parrafoOcultar) {
        parrafoOcultar.style.display = parrafoOcultar.style.display === "none" ? "block" : "none";
    }
});

//Ejercicio 12

const fondoPantalla = document.getElementById("fondo-pantalla");

fondoPantalla.addEventListener("change", function() {
    const colorSelec = fondoPantalla.value;
    document.body.style.backgroundColor = colorSelec;
});

//Ejercicio 13

const botonClicks = document.getElementById("boton-clicks");
const clicksContados = document.getElementById("clicks-contados");
let contador = 0;

botonClicks.addEventListener("click", function() { 
    contador++;
    clicksContados.textContent = "Número de clicks: "+contador;
});

//Ejercicio 14

const campoLongitud = document.getElementById("campo-longitud");
const parrafoLongitud = document.getElementById("parrafo-longitud");

campoLongitud.addEventListener("input", function() {
    let longitud = campoLongitud.value.length;
    if (longitud != 0) {
        parrafoLongitud.textContent = "Longitud del texto: "+longitud;
    } else {
        parrafoLongitud.textContent = "";
    }
});

//Ejercicio 15

const imagenRaton = document.getElementById("imagen-raton");

imagenRaton.addEventListener("mouseover", function() {
    imagenRaton.src = "https://www.turismoasturias.es/o/adaptive-media/image/6994017/3/41567a58-ba31-888f-a955-0bbad2d87ca5?t=1717060047191";
});

imagenRaton.addEventListener("mouseout", function() {
    imagenRaton.src = "https://masmit.com/75-large_default/filetes-ternera-para-empanar.jpg";
});

//Ejercicio 16

//Ejercicio 17

//Ejercicio 18

//Ejercicio 19

//Ejercicio 20