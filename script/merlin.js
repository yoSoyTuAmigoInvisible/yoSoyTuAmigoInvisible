const merlin = document.getElementById("merlin");
const bubble = document.getElementById("speechBubble");
const text = document.getElementById("merlinText");

let speaking = false;
let colaMensajes = [];
let escribiendo = false;

let intervaloEscritura = null;
let timeoutCerrar = null;

// ======================================
// CERRAR DIÁLOGO
// ======================================

function cerrarDialogo() {

    if (intervaloEscritura) {

        clearInterval(intervaloEscritura);
        intervaloEscritura = null;

    }

    if (timeoutCerrar) {

        clearTimeout(timeoutCerrar);
        timeoutCerrar = null;

    }

    bubble.style.display = "none";

    text.innerHTML = "";

    speaking = false;

    escribiendo = false;

    colaMensajes = [];

}

// ======================================
// CLICK EN MERLIN
// ======================================

merlin.addEventListener("click", () => {

    // Si ya está hablando, cerrar el diálogo
    if (speaking) {

        cerrarDialogo();
        return;

    }

    gameState.visitasMerlin++;

    guardarEstado();

    let frase = "";

    if (!gameState.pistasAbiertas[0]) {

        frase = "Quizás deberías comenzar por la primera pista.";

    }

    else if (!gameState.pistasAbiertas[1]) {

        frase = "Ya has avanzado... continúa.";

    }

    else if (!gameState.pistasAbiertas[2]) {

        frase = "Cada vez estás más cerca.";

    }

    else if (!gameState.pistasAbiertas[3]) {

        frase = "Solo queda una última respuesta.";

    }

    else {

        frase = "Has descubierto todas las pistas... pero todavía no has terminado.";

    }

    escribir(frase);

});

// ======================================
// ESCRIBIR MENSAJES
// ======================================

function escribir(texto) {

    colaMensajes.push(texto);

    if (escribiendo) return;

    siguienteMensaje();

}

function siguienteMensaje() {

    if (colaMensajes.length === 0) {

        escribiendo = false;
        speaking = false;

        return;

    }

    escribiendo = true;
    speaking = true;

    bubble.style.display = "block";

    text.innerHTML = "";

    const mensaje = colaMensajes.shift();

    let i = 0;

    intervaloEscritura = setInterval(() => {

        text.innerHTML += mensaje.charAt(i);

        i++;

        if (i >= mensaje.length) {

            clearInterval(intervaloEscritura);

            intervaloEscritura = null;

            timeoutCerrar = setTimeout(() => {

                bubble.style.display = "none";

                speaking = false;

                escribiendo = false;

                siguienteMensaje();

            }, 3500);

        }

    }, 30);

}

// ======================================
// BIENVENIDA
// ======================================

window.addEventListener("load", () => {

    setTimeout(() => {

        escribir("Bienvenido... llevaba mucho tiempo esperando este momento.");

    }, 1500);

});

// ======================================
// INACTIVIDAD
// ======================================

let ultimoMovimiento = Date.now();

document.addEventListener("mousemove", () => {

    ultimoMovimiento = Date.now();

});

setInterval(() => {

    if (Date.now() - ultimoMovimiento > 30000) {

        ultimoMovimiento = Date.now();

        escribir("¿Te has quedado pensando...? Observa cada rincón.");

    }

}, 5000);

// ======================================
// REACCIÓN A LOS RELÁMPAGOS
// ======================================

document.addEventListener("lightning", () => {

    if (Math.random() < 0.15) {

        escribir("Los relámpagos revelan aquello que los ojos normalmente no ven.");

    }

});


// ======================================
// MERLIN REACCIONA AL ABRIR PISTAS
// ======================================

document.addEventListener("pistaAbierta", (event) => {

    const numero = event.detail.numero;

    let mensaje = "";

    switch (numero) {

        case 1:

            mensaje = "Interesante... seis Pokemon, importara el orden?";
            break;

        case 2:

            mensaje = "No todo debe verse... algunas cosas se deben 'sentir'.";
            break;

        case 3:

            mensaje = "Quizá las imagenes no son tan importantes, si no lo que quieren transmitir";
            break;

        case 4:

            mensaje = "Esta es la última prueba... espero que hayas aprendido a mirar más allá de lo evidente.";
            break;

    }

    if (mensaje !== "") {

        // Si Merlin ya estaba hablando, cambia inmediatamente al nuevo mensaje.
        cerrarDialogo();

        escribir(mensaje);

    }

});