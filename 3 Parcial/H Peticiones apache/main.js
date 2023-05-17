window.onload=function(){
    document.getElementById("btnPeticion").addEventListener("click", function(e){
        e.preventDefault();
        
        let idJugador = prompt("Teclee el id del jugador");
    
        fetch('http://localhost:8085/jugador?idJugador=' + idJugador)
        .then(respuesta => respuesta.json())
            .then(objetoJugador => {
                console.log(objetoJugador);
                document.getElementById("nombre").value = objetoJugador[0].nombre;
            })
    });
}
