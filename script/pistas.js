const pistas = {

    1: "Todavía no hay una pista aquí...",

    2: "",

    3: "La oscuridad siempre esconde respuestas.",

    4: "Esta será la última pista."

};

// ==========================================
// CARGAR CONTENIDO SOLO SI EXISTE
// ==========================================

const hint1 = document.getElementById("textHint1");
const hint2 = document.getElementById("textHint2");
const hint3 = document.getElementById("textHint3");
const hint4 = document.getElementById("textHint4");

if (hint1) hint1.innerHTML = pistas[1];
if (hint2) hint2.innerHTML = pistas[2];
if (hint3) hint3.innerHTML = pistas[3];
if (hint4) hint4.innerHTML = pistas[4];