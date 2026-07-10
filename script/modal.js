// ==========================================
// AUDIOS
// ==========================================

const audioPista2 = new Audio("pista2/pista2.wav");

audioPista2.loop = true;

audioPista2.preload = "auto";

// ==========================================
// BOTONES
// ==========================================

const buttons = document.querySelectorAll(".hintButton");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const modalID = button.dataset.modal;

        const modal = document.getElementById(modalID);

        modal.style.display = "flex";

        // -------------------------
        // GUARDAR PROGRESO
        // -------------------------

        const numero = Number(modalID.replace("modal", ""));

        // Guardar progreso
        gameState.pistasAbiertas[numero - 1] = true;

        if (!gameState.ordenPistas.includes(numero)) {

            gameState.ordenPistas.push(numero);

        }

        guardarEstado();

        // Avisar que se abrió una pista
        document.dispatchEvent(new CustomEvent("pistaAbierta", {

            detail: {

                numero: numero

            }

        }));

        // -------------------------
        // AUDIO PISTA 2
        // -------------------------

        if (modalID === "modal2") {

            audioPista2.currentTime = 0;

            audioPista2.play()
                .then(() => {

                    console.log("Audio iniciado.");

                })
                .catch(error => {

                    console.error("Error reproduciendo audio:", error);

                });

        }

    });

});

// ==========================================
// BOTONES CERRAR
// ==========================================

const closes = document.querySelectorAll(".close");

closes.forEach(close => {

    close.addEventListener("click", () => {

        const modal = close.closest(".modal");

        modal.style.display = "none";

        detenerAudios();

    });

});

// ==========================================
// CLICK FUERA
// ==========================================

window.addEventListener("click", (event) => {

    document.querySelectorAll(".modal").forEach(modal => {

        if (event.target === modal) {

            modal.style.display = "none";

            detenerAudios();

        }

    });

});

// ==========================================
// ESC
// ==========================================

document.addEventListener("keydown", (event) => {

    if (event.key !== "Escape") return;

    document.querySelectorAll(".modal").forEach(modal => {

        modal.style.display = "none";

    });

    detenerAudios();

});

// ==========================================
// DETENER AUDIOS
// ==========================================

function detenerAudios() {

    audioPista2.pause();

    audioPista2.currentTime = 0;

}


