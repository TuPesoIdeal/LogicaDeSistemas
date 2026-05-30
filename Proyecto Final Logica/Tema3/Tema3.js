// ACORDEONES
// ==========================================

const acordeones = document.querySelectorAll(".titulo-acordeon");

acordeones.forEach(boton => {

    boton.addEventListener("click", () => {

        const contenido = boton.nextElementSibling;

        if (contenido.style.display === "block") {

            contenido.style.display = "none";

        } else {

            contenido.style.display = "block";

        }

    });

});

// CELDAS INTERACTIVAS
// ==========================================

const celdas = document.querySelectorAll(".celda-interactiva");

celdas.forEach(celda => {

    celda.dataset.valor = "";

    celda.textContent = "?";

    celda.addEventListener("click", () => {

        if (celda.dataset.valor === "") {

            celda.dataset.valor = "V";
            celda.textContent = "V";

        }

        else if (celda.dataset.valor === "V") {

            celda.dataset.valor = "F";
            celda.textContent = "F";

        }

        else {

            celda.dataset.valor = "V";
            celda.textContent = "V";

        }

    });

});

// PROGRESO
// ==========================================

function actualizarProgreso() {

    const total = document.querySelectorAll(".celda-interactiva").length;

    let completadas = 0;

    document.querySelectorAll(".celda-interactiva").forEach(celda => {

        if (
            celda.textContent === "V" ||
            celda.textContent === "F"
        ) {

            completadas++;

        }

    });

    let porcentaje = Math.round(
        (completadas / total) * 100
    );

    document.getElementById("progreso").style.width =
        porcentaje + "%";

    document.getElementById("porcentaje").textContent =
        porcentaje + "%";

}

// MENÚ ACTIVO
// ==========================================

const secciones = document.querySelectorAll("section");

const enlaces = document.querySelectorAll(".menu-tema a");

window.addEventListener("scroll", () => {

    let actual = "";

    secciones.forEach(seccion => {

        const top = seccion.offsetTop - 200;

        if (window.scrollY >= top) {

            actual = seccion.getAttribute("id");

        }

    });

    enlaces.forEach(link => {

        link.classList.remove("activo");

        if (
            link.getAttribute("href") === "#" + actual
        ) {

            link.classList.add("activo");

        }

    });

});

// APARICIÓN DE SECCIONES
// ==========================================

const observador = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("mostrar-seccion");

        }

    });

});

document.querySelectorAll(".seccion").forEach(sec => {

    sec.classList.add("oculto");

    observador.observe(sec);

});

// IMPRIMIR
// ==========================================

const botonImprimir =
document.getElementById("imprimir");

if (botonImprimir) {

    botonImprimir.addEventListener("click", () => {

        window.print();

    });

}


// INICIAR PROGRESO
// ==========================================

actualizarProgreso();

// ==========================================
// BOTONES VERIFICAR
// ==========================================

const botonesVerificar =
document.querySelectorAll(".verificar");

botonesVerificar.forEach(boton => {

    boton.addEventListener("click", () => {

        const contenedor =
        boton.parentElement;

        const celdas =
        contenedor.querySelectorAll(".celda-interactiva");

        let correctas = 0;

        celdas.forEach(celda => {

            const respuestaUsuario =
            celda.dataset.valor;

            const respuestaCorrecta =
            celda.dataset.correcta;

            if (
                respuestaUsuario === respuestaCorrecta
            ) {

                celda.style.backgroundColor =
                "#b7f7b7";

                correctas++;

            }

            else {

                celda.style.backgroundColor =
                "#ffb3b3";

            }

        });

        const resultado =
        contenedor.querySelector(".resultado");

        resultado.textContent =
        `Correctas: ${correctas} de ${celdas.length}`;

    });

});

// ==========================================
// MOSTRAR RESPUESTAS
// ==========================================

const botonesMostrar =
document.querySelectorAll(".mostrar");

botonesMostrar.forEach(boton => {

    boton.addEventListener("click", () => {

        const contenedor =
        boton.parentElement;

        const celdas =
        contenedor.querySelectorAll(".celda-interactiva");

        celdas.forEach(celda => {

            celda.textContent =
            celda.dataset.correcta;

            celda.dataset.valor =
            celda.dataset.correcta;

            celda.style.backgroundColor =
            "#C8D9E6";

        });

    });

});