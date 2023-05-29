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
    document.getElementById("btnAgregar").addEventListener("click", async function(e){
        e.preventDefault();   
        let headerList = {
            "Acept":"*/*",
            "Content-Type":"aplication/json"
        }

        let contentBody = JSON.stringify ({
            "nombre": document.getElementById("nombre").value,
            "apellidos": document.getElementById("apellidos").value,
            "fechaN": document.getElementById("fechaN").value,
            "playera": document.getElementById("playera").value,
            "equipo": document.getElementById("equipo").value
        });
        console.log(contentBody);
        let respuesta =await fetch ('http://localhost:8080/jugador/',{
            method:"POST",
            body: contentBody,
            header: headerList
        })
        let datoJson = await respuesta.json();
        alert(datoJson.resultao);
        
    });
    //MODIFICAR
    document.getElementById("btnActualizar").addEventListener("click", async function(e){
        e.preventDefault();   
        let headerList = {
            "Acept":"*/*",
            "Content-Type":"aplication/json"
        }

        let contentBody = JSON.stringify ({
            "nombre": document.getElementById("nombre").value,
            "apellidos": document.getElementById("apellidos").value,
            "fechaN": document.getElementById("fechaN").value,
            "playera": document.getElementById("playera").value,
            "equipo": document.getElementById("equipo").value
        });
        
        let respuesta = await fetch ('http://localhost:8080/jugador/'+document.getElementById("idJugador").value,{
            method:"PUT",
            body: contentBody,
            header: headerList
        })
        let datoJson = await respuesta.json();
        alert(datoJson.resultao);
        
    });
}
