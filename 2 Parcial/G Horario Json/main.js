window.onload = function() {

    encabezados = ["Hora", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    datos7am = [{  hora: "7-8",
                lunes: "Programacion web",
                martes: "Programacion web",
                miercoles: "Programacion web",
                jueves: "Programacion web",
                viernes: "Programacion web"
    }]
    datos8am = [{  hora: "8-9",
                lunes: "",
                martes: "Taller de Sistemas operativos",
                miercoles: "",
                jueves: "Taller de Sistemas operativos",
                viernes: ""
    }]

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let tbody = document.createElement('tbody');

    
    encabezados.forEach(function(item) {
        let th = document.createElement("th");
        th.innerText = item;
        tr.appendChild(th);
    });

    datos7am.forEach(function(item){
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.innerText = item.hora;
        let td2 = document.createElement("td");
        td2.innerText = item.lunes;
        let td3 = document.createElement("td");
        td3.innerText = item.martes;
        let td4 = document.createElement("td");
        td4.innerText = item.miercoles;
        let td5 = document.createElement("td");
        td5.innerText = item.jueves;
        let td6 = document.createElement("td");
        td6.innerText = item.viernes;

        tr.appendChild(th);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tbody.appendChild(tr);
    });

    datos8am.forEach(function(item){
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.innerText = item.hora;
        let td2 = document.createElement("td");
        td2.innerText = item.lunes;
        let td3 = document.createElement("td");
        td3.innerText = item.martes;
        let td4 = document.createElement("td");
        td4.innerText = item.miercoles;
        let td5 = document.createElement("td");
        td5.innerText = item.jueves;
        let td6 = document.createElement("td");
        td6.innerText = item.viernes;

        tr.appendChild(th);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tbody.appendChild(tr);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('contenedor').appendChild(table);
    console.table(datos);

}
