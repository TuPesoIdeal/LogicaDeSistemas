function mostrarDeductivo(){
    document.getElementById("deductivo").innerHTML =
    "Ejemplo: Todos los humanos respiran. Carlos es humano. Entonces Carlos respira.";
}

function mostrarInductivo(){
    document.getElementById("inductivo").innerHTML =
    "Ejemplo: El lunes funcionó el sistema, el martes también y el miércoles también. Entonces se concluye que el sistema es estable.";
}

function mostrarAnalogico(){
    document.getElementById("analogico").innerHTML =
    "Ejemplo: Si una red funciona como un sistema de carreteras, los datos serían como vehículos que viajan por rutas.";
}

function mostrarAbductivo(){
    document.getElementById("abductivo").innerHTML =
    "Ejemplo: Si la computadora no enciende, una explicación probable es que no tiene energía eléctrica.";
}

function respuestaCorrecta(){
    document.getElementById("respuesta").innerHTML =
    "La respuesta es: razonamiento deductivo, porque parte de una idea general para llegar a una conclusión particular.";
}