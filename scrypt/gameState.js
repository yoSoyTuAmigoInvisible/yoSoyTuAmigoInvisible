// =======================================
// ESTADO POR DEFECTO
// =======================================

const defaultGameState = {

    pistasAbiertas: [false, false, false, false],

    ordenPistas: [],

    dialogosMostrados: {

        pista1: false,

        pista2: false,

        pista3: false,

        pista4: false

    },

    visitasMerlin: 0,

    juegoCompletado: false

};

// =======================================
// ESTADO ACTUAL
// =======================================

const gameState = {};

// =======================================
// CARGAR
// =======================================

function cargarEstado() {

    const estadoGuardado = localStorage.getItem("amigoInvisible2");

    if (estadoGuardado) {

        const datos = JSON.parse(estadoGuardado);

        Object.assign(gameState, defaultGameState, datos);

    } else {

        Object.assign(gameState, defaultGameState);

    }

}

// =======================================
// GUARDAR
// =======================================

function guardarEstado() {

    localStorage.setItem(

        "amigoInvisible2",

        JSON.stringify(gameState)

    );

}

cargarEstado();