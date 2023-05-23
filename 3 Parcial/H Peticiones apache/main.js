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
        
        let idJugador = prompt("Teclee el id del jugador");
        
    
        fetch('http://localhost:8080/jugador/' + idJugador)
        .then(respuesta => respuesta.json())
            .then(objetoJugador => {
                console.log(objetoJugador);
                document.getElementById("idJugador").value = objetoJugador[0].idJugador;
                document.getElementById("nombre").value = objetoJugador[0].nombre;
                document.getElementById("apellidos").value = objetoJugador[0].apellidos;
                document.getElementById("fechaN").value = objetoJugador[0].fechaN;
                document.getElementById("playera").value = objetoJugador[0].playera;
                document.getElementById("equipo").value = objetoJugador[0].equipo;
            })
    });
    //ELIMINAR
    document.getElementById("btnEliminar").addEventListener("click", function(e){
        e.preventDefault();
        let idJugador = prompt("Teclee el id del jugador");
    
        fetch('http://localhost:8080/jugador/' + idJugador, {method: 'DELETE'})
        .then(respuesta => respuesta.json())
            .then(objetoJugador => {
                console.log(objetoJugador);
                
            });
    });
    //AGREGAR
    document.getElementById("btnAgregar").addEventListener("click", function(e){
        e.preventDefault();    
        fetch('http://localhost:8080/jugador')
        .then(respuesta => respuesta.json())
            .then(objetoJugador => {
                document.getElementById("idJugador").value = objetoJugador[idJugador].idJugador;

            });
    });
}
