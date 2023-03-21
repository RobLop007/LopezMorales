window.onload = function () {
  encabezados = ["Hora", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  datos = [
    {      hora: "7-8",
      lunes: "Programacion web",
      martes: "Programacion web",
      miercoles: "Programacion web",
      jueves: "Programacion web",
      viernes: "Programacion web",
    },
    {      hora: "8-9",
      lunes: "",
      martes: "Taller de Sistemas operativos",
      miercoles: "",
      jueves: "Taller de Sistemas operativos",
      viernes: "",
    },
    {      hora: "9-10",
      lunes: "",
      martes: "Taller de Sistemas operativos",
      miercoles: "",
      jueves: "Taller de Sistemas operativos",
      viernes: "",
    },
    {      hora: "10-11",
      lunes: "",
      martes: "Arquitectura de computadoras",
      miercoles: "",
      jueves: "Arquitectura de computadoras",
      viernes: "",
    },
    {      hora: "11-12",
      lunes: "",
      martes: "Arquitectura de computadoras",
      miercoles: "",
      jueves: "Arquitectura de computadoras",
      viernes: "",
    },
    {      hora: "12-1",
      lunes: "",
      martes: "",
      miercoles: "",
      jueves: "",
      viernes: "",
    },
    {      hora: "1-2",
      lunes: "Graficacion",
      martes: "Graficacion",
      miercoles: "Graficacion",
      jueves: "Graficacion",
      viernes: "Graficacion",
    },
  ];

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let tbody = document.createElement("tbody");

  encabezados.forEach((item) => {
    let th = document.createElement("th");
    th.innerText = item;
    tr.appendChild(th);
  });

  datos.forEach((item) => {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    Object.values(item).forEach((item) => {
      let td = document.createElement("td");
      td.innerText = item;
      tr.appendChild(td);
    });
    tr.appendChild(th);
    tbody.appendChild(tr);
  });

  thead.appendChild(tr);
  table.appendChild(thead);
  table.appendChild(tbody);

  document.getElementById("contenedor").appendChild(table);
};