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

const campoTarea = document.getElementById("campo-tarea");
const agregarTarea = document.getElementById("agregar-tarea");
const listaTareas = document.getElementById("lista-tareas");

//Agregar una tarea nueva al pulsar el boton
agregarTarea.addEventListener("click", function() {
    if(campoTarea.value.length == 0) {
        listaTareas.textContent = "";
    } else {
        listaTareas.innerHTML += "<li>"+campoTarea.value+"</li>";
    }
});

//Eliminar una tarea con un click
listaTareas.addEventListener("click", function(event) {
    //Verificar si se hizo click en la etiqueta li
    if (event.target.tagName === "LI") {
        //Elimina el elemento del DOM
        event.target.remove();
    }
});

//Ejercicio 17

const textareaPalabra = document.getElementById("textarea-palabra");
const contadorPalabra = document.getElementById("contador-palabra");

//Método básico
textareaPalabra.addEventListener("input", function() {
    const palabras = this.value.trim().split(/\s+/);
    const numPalabras = this.value.trim() === '' ? 0 : palabras.length;
    contadorPalabra.textContent = `Método básico: Palabras: ${numPalabras}`;
});


//Ejercicio 18

const campoAlerta = document.getElementById("campo-alerta");
const pruebaAlerta = document.getElementById("alerta-prueba");

campoAlerta.addEventListener("keypress", function() {
    pruebaAlerta.textContent = "Ha escrito: "+campoAlerta.value;
});

campoAlerta.addEventListener("blur", function() {
    if(campoAlerta.value.length === 0) {
        alert("Campo vacío.");
    } else {
        alert("Resultado: "+campoAlerta.value);
    }
});

campoAlerta.addEventListener("focus", function() {
    pruebaAlerta.textContent = "Has vuelto al input";
})

//Ejercicio 19

const listaEstilo = document.querySelectorAll("#lista-estilo li");
listaEstilo.forEach((item, index) => {
    
    //dataset.activado: Guarda el estado del elemento (activado/desactivado)
    item.dataset.activado === 'true';
    item.style.cursor = 'pointer';

    if (index < 2) {
        item.addEventListener('dblclick', () => cambiarEstilo(item));
    } else {
        item.addEventListener('dblclick', () => cambiarEstiloConObjeto(item));
    }
});

// MÉTODO Más simple - cambiar estilos directamente
function cambiarEstilo(elemento) {
    // Si ya está activado, lo desactivamos
    if (elemento.dataset.activado === 'true') {
        elemento.style.backgroundColor = '';
        elemento.style.color = '';
        elemento.style.fontSize = '';
        elemento.style.fontWeight = '';
        elemento.style.padding = '';
        elemento.dataset.activado = 'false';
    } else {
        // Lo activamos con nuevos estilos
        elemento.style.backgroundColor = 'blue';
        elemento.style.color = 'white';
        elemento.style.fontSize = '20px';
        elemento.style.fontWeight = 'bold';
        elemento.style.padding = '10px';
        elemento.dataset.activado = 'true';
    }
}

// MÉTODO 2: Usando un objeto con estilos
const estilosActivado = {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '8px',
    border: '2px solid darkred',
    borderRadius: '5px'
};

function cambiarEstiloConObjeto(elemento) {
    if (elemento.dataset.activado === 'true') {
        // Resetear estilos
        Object.keys(estilosActivado).forEach(propiedad => {
            elemento.style[propiedad] = '';
        });
        elemento.dataset.activado = 'false';
    } else {
        // Aplicar estilos
        Object.assign(elemento.style, estilosActivado);
        elemento.dataset.activado = 'true';
    }
            
}

//Ejercicio 20

const desplegableDinamico = document.getElementById("desplegable-dinamico");
const arrayDin = ["Cachopo de cecina", "Cachopo de ternera", "Cachopo de pollo"]; 

desplegableDinamico.innerHTML += "<option value='' disabled selected>Seleccione una opción</option>";

for(elemento of arrayDin) {
    desplegableDinamico.innerHTML += "<option value='"+elemento+"'>"+elemento+"</option>";
}