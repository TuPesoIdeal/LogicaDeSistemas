
/* ================================================= */
/* VARIABLES */
/* ================================================= */

let puntos = 0;

/* ================================================= */
/* CAMBIAR PAGINAS */
/* ================================================= */

function mostrar(id){

let secciones =
document.querySelectorAll("section");

secciones.forEach(sec => {

sec.classList.remove("active");

});

document.getElementById(id)
.classList.add("active");

}

/* ================================================= */
/* RESPUESTAS */
/* ================================================= */

function respuesta(elemento,correcta){

if(correcta){

elemento.style.background =
"#567C8D";

elemento.style.color =
"white";

sumarPuntos();

alert("🎉 ¡Correcto!");

}

else{

elemento.style.background =
"#ffb3b3";

alert("❌ Incorrecto");

}

}

/* ================================================= */
/* UNION */
/* ================================================= */

function verificarUnion(){

let valor =
document.getElementById("union")
.value
.replace(/\s/g,'');

if(
valor ==
"{a,b,c,d,e}"
||
valor ==
"a,b,c,d,e"
){

document.getElementById("resultadoUnion")
.innerHTML =
"✅ Correcto";

sumarPuntos();

}

else{

document.getElementById("resultadoUnion")
.innerHTML =
"❌ Intenta otra vez";

}

}

/* ================================================= */
/* VOCALES */
/* ================================================= */

function verificarVocal(){

let vocal =
document.getElementById("vocal")
.value
.toLowerCase();

let vocales =
["a","e","i","o","u"];

if(vocales.includes(vocal)){

document.getElementById("resultadoVocal")
.innerHTML =
"✅ Pertenece al conjunto";

sumarPuntos();

}

else{

document.getElementById("resultadoVocal")
.innerHTML =
"❌ No pertenece";

}

}

/* ================================================= */
/* PUNTAJE */
/* ================================================= */

function sumarPuntos(){

puntos += 10;

document.getElementById("puntos")
.innerHTML = puntos;

}