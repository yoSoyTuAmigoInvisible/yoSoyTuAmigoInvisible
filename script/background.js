// =========================================
// LLUVIA
// =========================================

const rain=document.getElementById("rain");

for(let i=0;i<350;i++){

    const drop=document.createElement("div");

    drop.className="raindrop";

    drop.style.left=Math.random()*100+"vw";

    drop.style.animationDuration=
    (.4+Math.random()*.5)+"s";

    drop.style.animationDelay=
    Math.random()*2+"s";

    drop.style.opacity=.2+Math.random()*.8;

    rain.appendChild(drop);

}

// =========================================
// PARTICULAS
// =========================================

const particles=document.getElementById("particles");

for(let i=0;i<80;i++){

    const p=document.createElement("div");

    p.className="particle";

    p.style.left=Math.random()*100+"vw";

    p.style.top=Math.random()*100+"vh";

    p.style.animationDuration=
    (10+Math.random()*20)+"s";

    p.style.animationDelay=
    Math.random()*20+"s";

    particles.appendChild(p);

}

// =========================================
// RAYOS
// =========================================

const flash=document.getElementById("flash");

function lightning(){

    flash.animate(

        [

            {opacity:0},

            {opacity:.95},

            {opacity:0}

        ],

        {

            duration:120

        }

    );

    if(Math.random()>.45){

        setTimeout(()=>{

            flash.animate(

                [

                    {opacity:0},

                    {opacity:.5},

                    {opacity:0}

                ],

                {

                    duration:90

                }

            );

        },150);

    }

    document.dispatchEvent(

    new Event("lightning")

);

}

function storm(){

    lightning();

    setTimeout(

        storm,

        2500+Math.random()*7000

    );

}

storm();