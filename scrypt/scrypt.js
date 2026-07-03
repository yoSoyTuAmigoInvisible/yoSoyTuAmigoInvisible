/* QUÉ PASA? NO TE GUSTAN LOS APODOS? */

const nombres = [
    "BOT",
    "AMIGO?",
    "ENEMIGO",
    "CASCARUDO",
    "NULL",
    "ERROR",
    "██████",
    "HACKER"
];

setInterval(glitchTexto,4000);

function glitchTexto(){

    const span = document.getElementById("nombre");

    const original = span.textContent;

    span.classList.add("animar");

    let i = 0;

    const intervalo = setInterval(()=>{

        span.textContent =
            nombres[Math.floor(Math.random()*nombres.length)];

        i++;

        if(i>12){

            clearInterval(intervalo);

            span.textContent = original;

            span.classList.remove("animar");

        }

    },70);

}

/*

RELOJ DEL FIN DEL MUNDO
NO ADELANTAR... POR RAZONES OBVIAS

*/

const fechaObjetivo = new Date("July 4, 2026 00:00:00").getTime();

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const mensaje = document.getElementById("mensaje");

function actualizarContador() {

    const ahora = new Date().getTime();

    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {

        clearInterval(intervalo);

        dias.textContent = "00";
        horas.textContent = "00";
        minutos.textContent = "00";
        segundos.textContent = "00";

        mensaje.textContent = "¡La cuenta regresiva ha terminado!";

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


function mostrarMensaje() {
    document.getElementById("mensaje").textContent = "Apurado para hacer trampas?";
}