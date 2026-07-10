// ==========================================
// DETECTAR DISPOSITIVOS MÓVILES
// ==========================================

function esMovil() {

    return window.matchMedia("(pointer: coarse)").matches
        || /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);

}

// ==========================================

window.addEventListener("load", () => {

    if (!esMovil()) return;

    document.getElementById("mobileBlock").style.display = "flex";

    document.body.style.overflow = "hidden";

});