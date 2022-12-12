const WIDTH = 1200;
const HEIGHT = 765;

let objetivo = {
    ejeX: generaNumeroAleatorio(WIDTH),
    ejeY: generaNumeroAleatorio(HEIGHT)
};

let $foto = document.querySelector("#foto");
let $distancia = document.querySelector("#distancia");
let clicks = 0;

$foto.addEventListener("click", function(evento){
    console.log("click");
    clicks++;
    let distancia = obtenerDistancia(evento, objetivo);
    let ayudin = obtenerAyudin(distancia);
    $distancia.innerHTML = `<h1>${ayudin}</h1>`;

    if(distancia < 20){
        alert(`Encontraste al personaje misterioso en ${clicks} clicks!`);
        location.reload();
    }
});