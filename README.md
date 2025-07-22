# DOM-y-Eventos

<h2>Explicación del Ejercicio</h2>

<h3>¿Qué vamos a hacer?</h3>

<p>Vamos a crear eventos y manipular el DOM (Document Object Model) usando JavaScript <br>
  para realizar diferentes interacciones con elementos HTML.</p>

<h3>¿Dónde lo vamos a hacer?</h3>

<p>Crearemos el archivo index.html y los archivos de javascript <br>
que necesites, donde implementaremos los ejercicios en un entorno de desarrollo local <br>
utiizando Live Server para ver los resultados.</p>

<h3>¿Cómo lo hacemos?</h3>

<p>Mediante el uso de JavaScript, manipulación del DOM y eventos del navegador, <br>
escribiremos código que permitirá interactuar con los elementos de la página, como <br>
botones, campos de texto, listas, y más.</p>

<h3>¿Con qué lo hacemos?</h3>

<p>Utilizaremos HTML, JavaScript y un editor de texto como Visual Studio Code.</p>

<h3>¿Cómo se evalúa lo que hacemos?</h3>

<p>El ejercicio será evaluado en función de la correcta implementación de los eventos y la <br>
manipulación del DOM en las diferentes tareas propuestas.</p>

<hr>

<h2>Objetivo del Ejercicio</h2>

<h3>Objetivos Específicos</h3>
<ul>
  <li>Manipulación del DOM: Modificar los elementos del DOM a través de JavaScript, <br>
como cambiar el contenido, ocultar o mostrar elementos, y alterar atributos o estilos.</li>
  <li>Implementación de eventos: Asignar y gestionar eventos del navegador para <br>
interactuar con los usuarios.</li>
  <li>Interacciones dinámicas: Crear interacciones dinámicas, como cambiar el <br>
contenido de un párrafo, contar clics, o generar listas de elementos en respuesta a <br>
las acciones del usuario.</li>
</ul>

<h3>Criterios de Evaluación</h3>
<ul>
  <li>Implementación de eventos: Demostrar comprensión en la asignación y uso de <br>
eventos, así como en la gestión de respuestas a la interacción del usuario.</li>
  <li>Manipulación efectiva del DOM: Modificar elementos del DOM de manera clara y <br>
eficaz, como cambiar estilos o contenido de texto en respuesta a eventos.</li>
  <li>Claridad y estructura del código: El código debe estar bien organizado, con <br>
nombres descriptivos para variables y funciones, lo que facilita su lectura y <br>
mantenimiento.</li>
  <li>Cumplimiento de los objetivos del ejercicio: Se evaluará la correcta <br>
implementación de las instrucciones especificadas para cada tarea.</li>
</ul>

<hr>

<h3>Lista de ejercicios</h3>

<ol>
  <li>
    <strong>Cambiar el texto de un elemento:</strong>
    <p>○ Crea un párrafo con un texto inicial. Utiliza JavaScript para seleccionar el <br>
          párrafo y cambiar su contenido por un nuevo mensaje.</p> 
  </li>
  <li>
    <strong>Cambiar el estilo de un elemento: </strong>
    <p>○ Crea un párrafo. Utilizando JavaScript, selecciona el párrafo y cambia su <br>
          color de texto a rojo.</p>
  </li>
  <li>
    <strong>Agregar y eliminar elementos:</strong>
    <p>○ Crea una lista vacía en HTML. Con JavaScript, crea un nuevo elemento de <br>
          lista, añádele texto y agrégalo como hijo de la lista.</p>
  </li>
  <li>
    <strong>Mostrar una lista de nombres desde un array:</strong>
    <p>○ Crea un array de 10 nombres y una función que imprima esos nombres en <br>
          pantalla como una lista HTML usando DOM.</p>
  </li>
  <li>
    <strong>Contar elementos de un array:</strong>
    <p>○ Crea un array de números y una función que imprima en pantalla cuántos <br>
          elementos tiene el array</p>
  </li>
  <li>
    <strong>Crear un formulario con nodos:</strong>
    <p>○ Mediante JavaScript, genera los elementos necesarios para crear un <br>
          formulario básico (input, label, botón) y agrégalo al DOM.</p>
  </li>
  <li>
    <strong>Crear una tabla a partir de un array de nombres:</strong>
    <p>○ Crea una tabla HTML usando JavaScript para mostrar los nombres de un <br>
          array en filas y columnas.</p>
  </li>
  <li>
    <strong>Mostrar un objeto en una tabla:</strong>
    <p>Usando el siguiente array de objetos, imprime cada elemento en la tabla
          creada en el ejercicio anterior.</p>
    <p style="color: green">
      javascript <br>
Copiar código <br>
let array = [ <br>
{ <br>
"id": 1, <br>
"name": "Rick Sanchez", <br>
"status": "Alive", <br>
"species": "Human", <br>
"type": "", <br>
"gender": "Male", <br>
}, <br>
{ " <br>
id": 2, <br>
"name": "Morty Smith", <br>
"status": "Alive", <br>
"species": "Human", <br>
"type": "", <br>
"gender": "Male", <br>
}, <br>
{ " <br>
id": 3, <br>
"name": "Summer Smith", <br>
"status": "Alive", <br>
"species": "Human", <br>
"type": "", <br>
"gender": "Female", <br>
}, <br>
{ " <br>
id": 4, <br>
"name": "Beth Smith", <br>
"status": "Alive", <br>
"species": "Human", <br>
"type": "", <br>
"gender": "Female", <br>
}, <br>
{ <br>
"id": 5, <br>
"name": "Jerry Smith", <br>
"status": "Alive", <br>
"species": "Human", <br>
"type": "", <br>
"gender": "Male", <br>
}, <br>
{ " <br>
id": 6, <br>
"name": "Abadango Cluster Princess", <br>
"status": "Alive", <br>
"species": "Alien", <br>
"type": "", <br>
"gender": "Female", <br>
}, <br>
{ " <br>
id": 7, <br>
"name": "Abradolf Lincler", <br>
"status": "unknown", <br>
"species": "Human", <br>
"type": "Genetic experiment", <br>
"gender": "Male", <br>
}, <br>
{ " <br>
id": 8, <br>
"name": "Adjudicator Rick", <br>
"status": "Dead", <br>
"species": "Human", <br>
"type": "", <br>
"gender": "Male", <br>
}, <br>
{ " <br>
id": 9, <br>
"name": "Agency Director", <br>
"status": "Dead", <br>
"species": "Human", <br>
"type": "", <br>
"gender": "Male", <br>
}, <br>
{ " <br>
id": 10, <br>
"name": "Alan Rails", <br>
"status": "Dead", <br>
"species": "Human", <br>
"type": "Superhuman (Ghost trains summoner)", <br>
"gender": "Male", <br>
} <br>
]
    </p>
  </li>
  <li>
    <strong>Eliminar un elemento de la lista al hacer clic:</strong>
    <p>○ Crea una lista con algunos elementos. Al hacer clic en cualquier elemento de <br>
          la lista, elimínalo del DOM.</p>
  </li>
  <li>
    <strong>Cambiar el contenido de un párrafo con un evento de teclado:</strong>
    <p>○ Crea un campo de texto y un párrafo. Cada vez que el usuario presione una <br>
          tecla, actualiza el contenido del párrafo con el texto del input.</p>
  </li>
  <li>
    <strong>Ocultar y mostrar un párrafo:</strong>
    <p>○ Crea un botón y un párrafo. Al hacer clic en el botón, alterna entre ocultar y <br>
          mostrar el párrafo.</p>
  </li>
  <li>
    <strong>Cambiar el color de fondo de la página:</strong>
    <p>○ Crea un menú desplegable con varios colores. Al seleccionar un color, <br>
          cambia el fondo de la página al color seleccionado.</p>
  </li>
  <li>
    <strong>Contar el número de clics en un botón:</strong>
    <p> ○ Crea un botón que cuente cuántas veces se ha hecho clic en él y muestre el <br>
          resultado en un párrafo.</p>
  </li>
  <li>
    <strong>Mostrar la longitud del texto ingresado en tiempo real:</strong>
    <p>○ Crea un input de texto. Muestra en un párrafo la cantidad de caracteres que <br>
          se ingresan en tiempo real.</p>
  </li>
  <li>
    <strong>Cambiar la imagen al pasar el ratón:</strong>
    <p>○ Crea una imagen que cambie cuando el ratón pasa por encima de ella y <br>
          vuelva a la original cuando se retira el ratón.</p>
  </li>
  <li>
    <strong>Añadir una tarea a una lista de tareas: </strong>
    <p>Crea un campo de texto y un botón "Agregar Tarea". Al hacer clic en el botón, <br>
          añade el contenido del campo de texto a una lista de tareas</p>
  </li>
  <li>
    <strong>Contar palabras de un párrafo en tiempo real:</strong>
    <p>○ Crea un textarea y un párrafo. A medida que el usuario escribe en el <br>
          textarea, muestra cuántas palabras ha escrito.</p>
  </li>
  <li>
    <strong>Mostrar una alerta cuando se completa un campo:</strong>
    <p>○ Crea un input de texto. Cuando el usuario deje de escribir y salga del input, <br>
          muestra una alerta con el contenido ingresado.</p>
  </li>
  <li>
    <strong>Cambiar el estilo de los elementos de la lista al hacer doble clic:</strong>
    <p>○ Crea una lista de elementos. Al hacer doble clic en cualquier elemento, <br>
          cambia su estilo (color, tamaño de fuente, etc.).</p>
  </li>
  <li>
    <strong>Crear una lista desplegable con contenido dinámico:</strong>
    <p>○ Crea una lista desplegable (select) que se rellene dinámicamente con <br>
          elementos de un array al cargar la página.</p>
  </li>
</ol>

<h3>Paso a Paso</h3>

<h4>Paso 1: Crear la Carpeta del Proyecto</h4>
<ul>
  <li>Crea una carpeta llamada dom-eventos en tu computadora donde vas a guardar <br>
          todos los archivos del proyecto.</li>
</ul>
<h4>Paso 2: Crear el Archivo HTML y Javascript</h4>
<ul>
  <li>Dentro de la carpeta dom-eventos, crea un archivo llamado index.html.</li>
  <li>Dentro de la carpeta dom-eventos, crea los archivos de javascript que creas <br>
          necesario y vinculalos al archivo HTML.</li>
</ul>
<h4>Paso 3: Implementar los Ejercicios de 1 a 20 especificados en la Lista de Ejercicios</h4>
<h4>Paso 4: Guardar y Probar el Código</h4>
<ul>
  <li>Guarda todos los cambios en los archivos index.html y script.js.</li>
  <li>Revisa en el navegador si los ejercicios funcionan correctamente utilizando Live
          Server</li>
</ul>

<hr>

<h3>Recursos y herramientas</h3>
<ul>
  <li>Editor de textos: <a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
  <li>Documentación DOM:</li>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">JavaScript DOM Manipulation</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener">Event Listeners in JavaScript</a></li>
  </ul>
</ul>

<hr>

<h3>Entrega del ejercicio</h3>
<ul>
  <li>Formato de entrega</li>
  <ul>
    <li>Crea un repositorio en gitHub con el nombre dom-eventos.</li>
    <li>Sube la solución de los ejercicios realizados en el repositorio creado.</li>
    <li>Entrega el link del repositorio a las formadoras, a través del Discord.</li>
  </ul>
</ul>

<hr>

<p>Este ejercicio te ayudará a profundizar en el manejo del DOM y la creación de interacciones
dinámicas en las páginas web mediante el uso de JavaScript.</p>
