new gridjs.Grid({
    columns: ['nombre', 'apellidos', 'fechaN', 'playera', 'equipo'],
    server: {
        url:'http://localhost:8080/jugador',
        then: data => data.map( jugador=> [jugador.nombre, jugador.apellidos, juagdor.fechaN, jugador.playera, jugador.equipo])
    }
}).render(document.getElementById(""));