function mostrarextención(){
    document.getElementById("expextención").innerHTML =
    "En estos ejemplos se puede observar que sus elementos pertenecen a una misma categoría, como lo serían los colores primarios y las vocales.";
}

function mostrarcomprension(){
    document.getElementById("expcomprension").innerHTML =
    "En este caso se evidencia que para formar parte del conjunto, todos los elementos deben cumplir con la misma característica común que se está pidiendo."; 
}

function mostraroperacion(){
    document.getElementById("expoperacion").innerHTML =
    "Estas operaciones las podemos interpretar como:<br>• <strong>Unión (A ∪ B):</strong> Elementos que están en A o en B.<br>• <strong>Intersección (A ∩ B):</strong> Elementos comunes a A y B.<br>• <strong>Diferencia (A − B):</strong> Elementos que están en A pero no en B.<br>• <strong>Complemento (Ac):</strong> Elementos que no están en A, respecto al conjunto universal U.";
}

function mostrarU(){
    document.getElementById("expU").innerHTML = 
    "Los elementos que conforman por separado tanto el conjunto A como el conjunto B, se unen con el fin de crear uno nuevo que englobe todos los elementos de ambos conjuntos [En A o en B (A ∪ B)].";
}

function mostrarI(){
    document.getElementById("expI").innerHTML =
    "En esta ocasión, el conjunto que se forma incluye únicamente los elementos que se repiten en ambos conjuntos. Mientras que los que no se repiten son excluidos del mismo [Comunes entre A y B (A ∩ B)].";
}

function mostrarD(){
    document.getElementById("expD").innerHTML = 
    "Al ver ese conjunto, podemos notar que el conjunto final solo incluye los elementos propios de A. El número 3, al también estar incluido en el conjunto B, es excluido a la hora de crear el conjunto de diferencia [En A pero no en B (A – B)].";
}

function mostrarC(){
    document.getElementById("expC").innerHTML = 
    "Con esto, se puede deducir que los elementos que hacen falta para completar el conjunto A (4 estudiantes), es todo lo demás que está en el conjunto U (496 estudiantes).";
}

function mostrarDS(){
    document.getElementById("expDS").innerHTML = 
    "Es muy similar a la intersección, con la diferencia de que en esta ocasión se toman los elementos que NO se repiten entre ellos, mientras que los que se encuentran al mismo tiempo en ambos son excluidos por completo del conjunto.";
}