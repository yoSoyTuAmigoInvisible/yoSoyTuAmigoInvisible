/* ==========================================================
   MODAL - PISTA 1
========================================================== */

function mostrarModalPista1() {

    if (document.getElementById("modalPistas")) return;

    const imagenes = [

        "Pista1/9.png",
        "Pista1/780.png",
        "Pista1/76.png",
        "Pista1/532.png",
        "Pista1/635.png",
        "Pista1/5.png"

    ];

    crearModal(
        "PISTA 1",
        imagenes
    );

}


/* ==========================================================
   MODAL - PISTA 2
========================================================== */

function mostrarModalPista2() {

    // Evita abrir dos modales
    if (document.getElementById("modalPistas")) return;

    const fondo = document.createElement("div");
    fondo.id = "modalPistas";

    fondo.innerHTML = `

        <div class="modal-contenido modal-pista2">

            <h2 class="no-select">PISTA 2</h2>

            <p class="texto-pista no-select">

                LO ESENCIAL ES INVISIBLE A LOS
                <span class="ojo-glow">OJOS</span>

            </p>

            <p class="mensaje-oculto">
                BUEN INTENTO... PERO PROBA ESCUCHANDO UN POCO
            </p>

            <button id="cerrarModal">
                Cerrar
            </button>

        </div>

    `;

    document.body.appendChild(fondo);

    /* ===============================
       AUDIO EN BUCLE
    =============================== */

    const audio = new Audio("/Pista2/pista2-audio.wav");

    audio.volume = 0.6;

    function reproducirLoop() {

        audio.currentTime = 0;
        audio.play();

    }

    reproducirLoop();

    const intervaloAudio = setInterval(() => {

        reproducirLoop();

    }, 5000);

    /* ===============================
       CERRAR
    =============================== */

    document
        .getElementById("cerrarModal")
        .addEventListener("click", () => {

            clearInterval(intervaloAudio);

            audio.pause();

            audio.currentTime = 0;

            fondo.remove();

        });


    console.log("- . .-. .-. .. -... .-.. . / -... --- - .. -. --..-- / --.- ..- . .-. .. .- / .... .- -.-. . .-. / - .-. .- -- .--. .- / . .-.. / .-.. --- -.-. --- .-.-.");
}

const audio = new Audio("/Pista2/pista2-audio.wav");

audio.volume = 0.6;

function reproducirLoop(){

    audio.currentTime = 0;

    audio.play();

    audio.onended = () => {

        setTimeout(reproducirLoop,5000);

    };

}

reproducirLoop();