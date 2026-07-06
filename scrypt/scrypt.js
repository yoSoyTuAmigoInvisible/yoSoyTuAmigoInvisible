/* ==========================================================
   QUÉ PASA? NO TE GUSTAN LOS APODOS?
========================================================== */

const nombres = [
    "BOT",
    "AMIGO??",
    "ENEMIGO",
    "CASCARUDO",
    "NULL",
    "ERROR",
    "██████",
    "HACKER"
];

setInterval(glitchTexto, 4000);

function glitchTexto() {

    const span = document.getElementById("nombre");
    const original = span.textContent;

    span.classList.add("animar");

    let i = 0;

    const intervaloGlitch = setInterval(() => {

        span.textContent =
            nombres[Math.floor(Math.random() * nombres.length)];

        i++;

        if (i > 12) {

            clearInterval(intervaloGlitch);

            span.textContent = original;

            span.classList.remove("animar");

        }

    }, 70);

}


/* ==========================================================
   RELOJ DEL FIN DEL MUNDO
========================================================== */

const fechaObjetivo = new Date().getTime() + 2000;
//const fechaObjetivo = new Date("July 4, 2026 00:00:00").getTime();

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const mensaje = document.getElementById("mensaje");
const grid = document.querySelector(".grid-tiempo");
const boton = document.getElementById("APRIETAME");
console.log(boton);


function finalizarCuentaAtras() {

    // Inicia la animación CSS
    grid.classList.add("fin");

    // Espera a que termine
    grid.addEventListener("animationend", () => {

        grid.style.display = "none";

        mensaje.innerHTML = "ACCESS GRANTED";

        boton.disabled = false;

        // Opcional: animación del botón
        boton.classList.add("activo");

    }, { once: true });

}


function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {

        console.log("Llegó la fecha");

        clearInterval(intervalo);

        dias.textContent = "00";
        horas.textContent = "00";
        minutos.textContent = "00";
        segundos.textContent = "00";

        finalizarCuentaAtras();

        return;

    }


    const diasRestantes = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horasRestantes = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutosRestantes = Math.floor(
        (diferencia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundosRestantes = Math.floor(
        (diferencia % (1000 * 60))
        / 1000
    );

    dias.textContent = String(diasRestantes).padStart(2, "0");
    horas.textContent = String(horasRestantes).padStart(2, "0");
    minutos.textContent = String(minutosRestantes).padStart(2, "0");
    segundos.textContent = String(segundosRestantes).padStart(2, "0");

}


actualizarContador();

const intervalo = setInterval(actualizarContador, 1000);


/* ==========================================================
   BOTÓN DE PISTAS
========================================================== */

function mostrarMensaje() {

    const ahora = Date.now();

    // Si todavía NO llegó la fecha
    if (ahora < fechaObjetivo) {

        mensaje.textContent = "Apurado para hacer trampas?";
        return;

    }

    // Si YA llegó la fecha
    mostrarModal(
        "Por motivos del partido, la primera pista se retrasa un poco."
    );

}

/* VENTANA MODAL "TEMPORAL" (jeje) */

/*
function mostrarModal(texto){

    // Evita crear dos modales
    if(document.getElementById("modalPistas")) return;

    const fondo = document.createElement("div");
    fondo.id = "modalPistas";

    fondo.innerHTML = `
        <div class="modal-contenido">

            <h2>AVISO</h2>

            <p>${texto}</p>

            <button id="cerrarModal">Aceptar</button>

            <h3 class="argentina">
                ¡VAMOS ARGENTINA!!!
            </h3>

        </div>
    `;

    document.body.appendChild(fondo);

    document
        .getElementById("cerrarModal")
        .addEventListener("click", () => {

            fondo.remove();

        });

}*/

function mostrarModal() {

    // Evita crear dos modales
    if (document.getElementById("modalPistas")) return;

    // Imágenes de la pista 1
    const imagenes = [
        "Pista1/9.png",
        "Pista1/780.png",
        "Pista1/76.png",
        "Pista1/532.png",
        "Pista1/635.png",
        "Pista1/5.png"
    ];

    const fondo = document.createElement("div");
    fondo.id = "modalPistas";

    fondo.innerHTML = `
        <div class="modal-contenido">

            <h2>PISTA 1</h2>

            <div class="grid-pistas">

                ${imagenes.map((ruta, indice) => `
                    <div class="pista-img">
                        <img
                            src="${ruta}"
                            alt="Pista ${indice + 1}"
                        >
                    </div>
                `).join("")}

            </div>

            <button id="cerrarModal">
                Cerrar
            </button>

        </div>
    `;

    document.body.appendChild(fondo);

    document
        .getElementById("cerrarModal")
        .addEventListener("click", () => {

            fondo.remove();

        });

}
