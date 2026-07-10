const imagenes = [

    {
        src:"pista3/1.jpg",
        texto:"PLATA."
    },

    {
        src:"pista3/2.jpg",
        texto:"ALBURQUERQUE."
    },

    {
        src:"pista3/3.png",
        texto:"WAN HU."
    }

];

let indice = 0;

const img = document.getElementById("carouselImage");
const caption = document.getElementById("carouselCaption");

const dots = document.querySelectorAll(".dot");

function actualizarCarrusel(){

    img.src = imagenes[indice].src;

    caption.textContent = imagenes[indice].texto;

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[indice].classList.add("active");

}

function siguiente(){

    indice++;

    if(indice>=imagenes.length){

        indice=0;

    }

    actualizarCarrusel();

}

function anterior(){

    indice--;

    if(indice<0){

        indice=imagenes.length-1;

    }

    actualizarCarrusel();

}

document.querySelector(".next").addEventListener("click",siguiente);

document.querySelector(".prev").addEventListener("click",anterior);

// Cambio automático

setInterval(()=>{

    const modal=document.getElementById("modal3");

    if(modal.style.display==="flex"){

        siguiente();

    }

},6000);

actualizarCarrusel();