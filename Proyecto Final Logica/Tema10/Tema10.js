function calcularPorcentaje(){
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let porcentaje = parseFloat(document.getElementById("porcentaje").value);

    if(isNaN(cantidad) || isNaN(porcentaje)){
        document.getElementById("resultado").innerHTML =
        "Por favor ingresa valores válidos.";
        return;
    }

    let resultado = (cantidad * porcentaje) / 100;

    document.getElementById("resultado").innerHTML =
    "El " + porcentaje + "% de " + cantidad + " es: " + resultado.toFixed(2);
}

function limpiar(){
    document.getElementById("cantidad").value = "";
    document.getElementById("porcentaje").value = "";
    document.getElementById("resultado").innerHTML = "";
}

function mostrarEjemplo(){
    let precio = 300;
    let descuento = 15;
    let rebaja = (precio * descuento) / 100;
    let precioFinal = precio - rebaja;

    document.getElementById("ejemplo").innerHTML =
    "El 15% de Q300 es Q" + rebaja.toFixed(2) +
    ". Entonces el precio final es Q" + precioFinal.toFixed(2) + ".";
}