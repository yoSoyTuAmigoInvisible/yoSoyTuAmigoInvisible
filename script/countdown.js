const fechaFinal = new Date(2026, 6, 10, 15, 0, 0);
// Mes 6 = Julio

const countdown = document.getElementById("countdown");

const countdownContainer = document.getElementById("countdownContainer");

const finalHint = document.getElementById("finalHint");

function actualizarCuentaAtras(){

    const ahora = new Date();

    const diferencia = fechaFinal - ahora;

    if(diferencia <= 0){

        countdownContainer.classList.add("ocultarCountdown");

        setTimeout(()=>{

            countdownContainer.style.display="none";

            finalHint.classList.add("visible");

        },800);

        return;

    }

    const dias = Math.floor(diferencia / 86400000);

    const horas = Math.floor((diferencia % 86400000)/3600000);

    const minutos = Math.floor((diferencia % 3600000)/60000);

    const segundos = Math.floor((diferencia % 60000)/1000);

    countdown.innerHTML=

        dias+"d "

        +String(horas).padStart(2,"0")+":"

        +String(minutos).padStart(2,"0")+":"

        +String(segundos).padStart(2,"0");

}

actualizarCuentaAtras();

setInterval(actualizarCuentaAtras,1000);