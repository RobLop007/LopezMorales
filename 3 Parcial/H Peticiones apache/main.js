window.onload=function(){
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
            "Accept":"*/*",
            "Content-Type":"application/json"
        }

        let contentBody = {
            idJugador: document.getElementById("idJugador").value,
            nombre: document.getElementById("nombre").value,
            apellidos: document.getElementById("apellidos").value,
            fechaN: document.getElementById("fechaN").value,
            playera: document.getElementById("playera").value,
            equipo: document.getElementById("equipo").value
        };
        console.log(contentBody);
        let respuesta = await fetch('http://localhost:8080/jugador',{
            method:"POST",
            body: JSON.stringify(contentBody),
            headers: headerList
        })
        let datoJson = await respuesta.json();
        console.log(datoJson);
        alert("Jugador agregado");
        
    });
    //MODIFICAR
    document.getElementById("btnActualizar").addEventListener("click", async function(e){
        e.preventDefault();   
        let headerList = {
            "Accept":"*/*",
            "Content-Type":"application/json"
        }

        let contentBody =  {
            nombre: document.getElementById("nombre").value,
            apellidos: document.getElementById("apellidos").value,
            fechaN: document.getElementById("fechaN").value,
            playera: document.getElementById("playera").value,
            equipo: document.getElementById("equipo").value
        };
        console.log(contentBody);

        let idJugador = document.getElementById("idJugador").value;
        
        let respuesta = await fetch ('http://localhost:8080/jugador/' + idJugador,{
            method:"PUT",
            body: JSON.stringify(contentBody),
            header: headerList
        })
        let datoJson = await respuesta.json();
        console.log(datoJson);
        alert(datoJson);
        
    });
}
