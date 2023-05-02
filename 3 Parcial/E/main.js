document.getElementById("btnEnviar").addEventListener("click", function () {
        console.log("Click en boton enviar");

        let registro = {
            title: document.getElementById('titulo').value,
            body: document.getElementById('body').value,
            userId: document.getElementById('userId').value,
        };
        let opciones = {
            method: 'POST',
            body: JSON.stringify(registro),
            headers: { 'Content-type': 'application/json; charset=UTF-8', },
        };

        fetch('https://jsonplaceholder.typicode.com/posts', opciones)
            .then((response) => response.json())
            .then((json) => document.getElementById("ID").value = json.id);

    });