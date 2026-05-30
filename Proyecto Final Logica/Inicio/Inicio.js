// EFECTO DE SOMBRA AL HACER SCROLL

// GUARDAMOS EL HEADER
const header = document.querySelector(".header");

// ESCUCHAR EL SCROLL
window.addEventListener("scroll", () => {

    // SI BAJA MAS DE 50PX
    if(window.scrollY > 50){

        // AGREGAR SOMBRA MAS FUERTE
        header.style.boxShadow = "0px 5px 20px rgba(0,0,0,0.5)";
    }

    else{

        // SOMBRA NORMAL
        header.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
    }

});