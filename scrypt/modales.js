/* ==========================================================
   FUNCIÓN BASE
========================================================== */

function crearModal(titulo, imagenes) {

    if (document.getElementById("modalPistas")) return;

    const fondo = document.createElement("div");
    fondo.id = "modalPistas";

    fondo.innerHTML = `

        <div class="modal-contenido">

            <h2>${titulo}</h2>

            <div class="grid-pistas">

                ${imagenes.map((ruta, indice) => `

                    <div class="pista-img">

                        <img
                            src="${ruta}"
                            alt="Imagen ${indice + 1}"
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

/* ==========================================================
   MODAL - PISTA 1
========================================================== */

function mostrarModalPista1() {

    const imagenes = [

        "Pista1/9.png",
        "Pista1/780.png",
        "Pista1/76.png",
        "Pista1/532.png",
        "Pista1/635.png",
        "Pista1/5.png"

    ];

    crearModal("PISTA 1", imagenes);

}

/* ==========================================================
   MODAL - PISTA 2
========================================================== */

function mostrarModalPista2() {

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

    const audio = new Audio("Pista2/pista2-audio.wav");

    audio.volume = 0.6;

    function reproducirLoop() {

        audio.currentTime = 0;
        audio.play();

    }

    reproducirLoop();

    const intervaloAudio = setInterval(() => {

        reproducirLoop();

    }, 5000);

    document
        .getElementById("cerrarModal")
        .addEventListener("click", () => {

            clearInterval(intervaloAudio);

            audio.pause();
            audio.currentTime = 0;

            fondo.remove();

        });

}

/* ==========================================================
   MODAL - PISTA 3
========================================================== */

function mostrarModalPista3() {

    if (document.getElementById("modalPistas")) return;

    const imagenes = [

        "Pista3/1.jpg",
        "Pista3/2.jpg",
        "Pista3/3.png"

    ];

    let indice = 0;

    const fondo = document.createElement("div");
    fondo.id = "modalPistas";

    fondo.innerHTML = `

        <div class="modal-contenido modal-pista3">

            <h2>PISTA 3</h2>

            <div class="contenedor-imagen">

                <img
                    id="imagenPista3"
                    src="${imagenes[0]}"
                    alt="Pista 3"
                >

            </div>

            <button id="cerrarModal">
                Cerrar
            </button>

        </div>

    `;

    document.body.appendChild(fondo);

    const img = document.getElementById("imagenPista3");

    const intervalo = setInterval(() => {

        img.style.opacity = "0";

        setTimeout(() => {

            indice++;

            if (indice >= imagenes.length) {

                indice = 0;

            }

            img.src = imagenes[indice];

            img.style.opacity = "1";

        }, 300);

    }, 5000);

    document
        .getElementById("cerrarModal")
        .addEventListener("click", () => {

            clearInterval(intervalo);

            fondo.remove();

        });

}
