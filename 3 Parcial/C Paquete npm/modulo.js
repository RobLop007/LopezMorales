let frases=["Frase1","Frase2","Frase3","Frase4","Frase5"];

function obtenerFrase(){
    let indice = Math.floor(Math.random) * frases.length();
    return frases[indice];
}

module.exports.obtenerFrase=obtenerFrase;