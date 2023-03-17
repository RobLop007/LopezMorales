window.onload = function() {

    encabezados = ["NOMBRE", "APELLIDO1", "APELLIDO2"];
    datos = [{  nombre: "Roberto",
                apellido: "Lopez",
                apellido2: "Morales"

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

    datos.forEach(function(item){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = item.nombre;
        let td2 = document.createElement("td");
        td2.innerText = item.nombre;
        let td3 = document.createElement("td");
        td3.innerText = item.nombre;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('contenedor').appendChild(table);
    console.table(datos);

}
