function mostrarImportancia(){
    document.getElementById("expImportancia").innerHTML =
    "En programación, gracias a De Morgan podemos simplificar una condición extensa como <code>if (!(edad >= 18 && tieneDpi))</code> y transformarla en <code>if (edad < 18 || !tieneDpi)</code>. Esto permite que la computadora procese el código más rápido y que los programadores lo lean con mayor facilidad.";
}

function mostrarLey1(){
    document.getElementById("expLey1").innerHTML =
    "Negar la frase [Está lloviendo Y hace frío] equivale a decir: [NO está lloviendo O NO hace frío]. Con que una de las dos condiciones no se cumpla, la afirmación original ya deja de ser cierta."; 
}

function mostrarLey2(){
    document.getElementById("expLey2").innerHTML =
    "Si tu mamá dice: [No puedes comer helado O pastel], quiere decir exactamente que [NO puedes comer pastel Y NO puedes comer helado]. Se descartan las dos opciones por completo.. ";
}

function mostrarResumen(){
    document.getElementById("expResumen").innerHTML =
    "Cuando se elaboren las tablas de verdad para comprobar estas leyes, se podrá observar que los valores de verdad (F o V) en cada fila serán idénticos en las columnas finales de ¬(p ∧ q) y ¬p ∨ ¬q, lo que probará matemáticamente que son una tautología equivalente.";
}