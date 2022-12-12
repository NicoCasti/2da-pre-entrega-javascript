//funcion que genera números aleatorios
let generaNumeroAleatorio = tamanio => {
    return Math.floor(Math.random() * tamanio);
}

//funcion que se encarga de medir distancia desde el click hasta el personaje
let obtenerDistancia = (evento, objetivo) => {
    let difEjeX = evento.offsetX - objetivo.ejeX;
    let difEjeY = evento.offsetY - objetivo.ejeY;
    return Math.sqrt((difEjeX * difEjeX) + (difEjeY * difEjeY));
}

let obtenerAyudin = distancia =>{
    if(distancia < 50){
        return "Hirviendo";
    }else if (distancia < 75){
        return ("Muy caliente");
    }else if (distancia < 90){
        return("Caliente");
    }else if(distancia < 200){
        return("Tibio");
    }else if(distancia < 250){
        return("Frío");
    }else if(distancia<360){
        return("Muy frío");
    }else{
        return ("Congelado");
    }
}
