// variables
let onOffVerde;
let onOffAmarillo;
let onOffRojo;

// LUZ VERDE
let luzVerde = document.getElementById("verde");

function apagaVerde(){
    luzVerde.classList.replace("verde", "verde-ap");
    onOffVerde = 0;
}

function prendeVerde(){
    luzVerde.classList.replace("verde-ap", "verde");
    onOffVerde = 1;
}

// switch
function suicheVerde(){
    if (onOffVerde == 0 ){
        prendeVerde();
    } else{
        onOffVerde = 0;
        apagaVerde();
    }
}

// solo verde
function soloVerde (){
    if(onOffVerde == 0){
        prendeVerde();
        apagaAmarillo();
        apagaRojo();
    } else{
        apagaAmarillo();
        apagaRojo();
    }
}



// LUZ AMARILLO
let luzAmarillo = document.getElementById("amarillo");

function apagaAmarillo(){
    luzAmarillo.classList.replace("amarillo", "amarillo-ap");
    onOffAmarillo = 0;
}

function prendeAmarillo(){
    luzAmarillo.classList.replace("amarillo-ap", "amarillo");
    onOffAmarillo = 1;
}

// switch
function suicheAmarillo(){
    if (onOffAmarillo == 0 ){
        onOffAmarillo = 1;
        luzAmarillo.classList.add("amarillo");
        luzAmarillo.classList.remove("amarillo-ap");
    } else{
        onOffAmarillo = 0;
        luzAmarillo.classList.add("amarillo-ap");
        luzAmarillo.classList.remove("amarillo");
    }
}

// solo amarillo
function soloAmarillo (){
    if(onOffAmarillo == 0){
        prendeAmarillo();
        apagaVerde();
        apagaRojo();
    } else{
        apagaVerde();
        apagaRojo();
    }
}

// LUZ ROJA
let luzRojo = document.getElementById("rojo");

function apagaRojo(){
    luzRojo.classList.replace("rojo", "rojo-ap");
    onOffRojo = 0;
}

function prendeRojo(){
    luzRojo.classList.replace("rojo-ap", "rojo");
    onOffRojo = 1;
}

function suicheRojo(){
    if (onOffRojo == 0 ){
        luzRojo.classList.add("rojo");
        luzRojo.classList.remove("rojo-ap");
        onOffRojo = 1;
    } else{
        onOffRojo = 0;
        luzRojo.classList.add("rojo-ap");
        luzRojo.classList.remove("rojo");
    }
}

// solo Rojo
function soloRojo(){
    if(onOffRojo == 0){
        prendeRojo();
        apagaVerde();
        apagaAmarillo();
    } else{
        apagaVerde();
        apagaAmarillo();
    }
}

// ----------------- funcion de intervalo-----------------

// intervalo de tiempo
function intervalo(){
    setTimeout(soloVerde,0000);
    setTimeout(soloAmarillo,2000);
    setTimeout(soloRojo,4000);
}

let = parpadeo;

function iniciarSemaforo(){
    intervalo();
    parpadeo = setInterval(intervalo,6000);
}


function detenerSemaforo(){
    clearInterval(parpadeo);
    // clearTimeout(intervalo);
    // alert("hola");
}





// SUICHE

// function suicheVerde(){
//     document.getElementById("verde").classList.toggle("verde");
// }







// var b = document.querySelector("button");

// b.classList.replace("name", "helloButton");
// b.classList.replace("disabled", "");