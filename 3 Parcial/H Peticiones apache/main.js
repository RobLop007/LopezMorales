window.onload=function(){
    //PETICION
    document.getElementById("btnPeticion").addEventListener("click", function(e){
        e.preventDefault();    
        fetch('http://localhost:8080/jugador')
        .then(respuesta => respuesta.json())
            .then(objetoJugador => {
                console.log(objetoJugador);
            })
    });
    //BUSCAR
    document.getElementById("btnBuscar").addEventListener("click", function(e){
        e.preventDefault();
        
        let idJug = prompt("Teclee el id del jugador");
        let idBuscar= idJug-1;
    
        fetch('http://localhost:8080/jugador?idJugador=' + idJug)
        .then(respuesta => respuesta.json())
            .then(objetoJugador => {
                console.log(objetoJugador);
                document.getElementById("idJugador").value = objetoJugador[idBuscar].idJugador;
                document.getElementById("nombre").value = objetoJugador[idBuscar].nombre;
                document.getElementById("apellidos").value = objetoJugador[idBuscar].apellidos;
                document.getElementById("fechaN").value = objetoJugador[idBuscar].fechaN;
                document.getElementById("playera").value = objetoJugador[idBuscar].playera;
                document.getElementById("equipo").value = objetoJugador[idBuscar].equipo;
            })
    });
    //ELIMINAR
    document.getElementById("btnEliminar").addEventListener("click", function(e){
        e.preventDefault();
        
        let idJugador = prompt("Teclee el id del jugador");
    
        fetch('http://localhost:8080/jugador?idJugador=' + idJugador, {method: 'DELTE'})
        .then(respuesta => respuesta.json())
            .then(objetoJugador => {
                if(objetoJugador = )
                document.getElementById("idJugador").value = '';
                document.getElementById("nombre").value = '';
                document.getElementById("apellidos").value = '';
                document.getElementById("fechaN").value = '';
                document.getElementById("playera").value = '';
                document.getElementById("equipo").value = '';
            })
    });
}
