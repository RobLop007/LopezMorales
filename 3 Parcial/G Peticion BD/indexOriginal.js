const express = require('express');
const app = express();
const cors = require('cors');
const  mysql = require('mysql');
const bodyParse = require('body-parser')

app.use(cors());
app.use(bodyParse.json())
app.use(express.json());
let port = 8080

//PETICION
app.get('/jugador', (req, res) => {
    var conexion = mysql.createConnection({
      host      : 'localhost',
      user      : 'root',
      password  : '',
      database  : 'ejemploweb'
    });
  
    conexion.connect();
    conexion.query(`SELECT * FROM jugador`, function(error, results, fields){
      if (error) return res.json(error);      
      res.json(results);
    })
  conexion.end();
}); 

//BUSCAR
app.get('/jugador/:idJugador', (req, res) => {
  var conexion = mysql.createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : '',
    database  : 'ejemploweb'
  });
  conexion.connect();
  conexion.query(`SELECT * FROM jugador WHERE idJugador=${req.params.idJugador}`, function(error, results, fields){
    if (error) return res.json(error);      
    res.json(results);
  })
conexion.end();
}); 

//ELIMINAR
app.delete('/jugador/:idJugador', (req, res) => {
    var conexion = mysql.createConnection({
      host      : 'localhost',
      user      : 'root',
      password  : '',
      database  : 'ejemploweb'
    });
    conexion.connect();
    conexion.query(`DELETE FROM jugador WHERE idJugador=${req.params.idJugador}`, function(error, results, fields){
      if (error) return res.json(error);      
      res.json(results);
    })
  conexion.end();
}); 

//AGREGAR
app.post('/jugador', (req, res) => {
  var conexion = mysql.createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : '',
    database  : 'ejemploweb'
  });
  
  let miInsert = "INSERT INTO jugador (idJugador, nombre, apellidos, fechaN, playera, equipo)  VALUES ("+                                    
                                    "'" + req.body.idJugador + "',"   +
                                    "'" + req.body.nombre + "',"   +
                                    "'" + req.body.apellidos + "'," +
                                    "'" + req.body.fechaN + "',"    +
                                    "'" + req.body.playera + "',"   +
                                    "'" + req.body.equipo + "');";
  conexion.connect();
  conexion.query(miInsert, function(error, results, fields){
  if (error) return res.json(error);
  else{
    console.log(results);
    res.json(results);
  }      
    res.json(results);
  })
conexion.end();
}); 

//ACTUALIZAR
app.put('/jugador/:idJugador', (req, res) => {
  var conexion = mysql.createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : '',
    database  : 'ejemploweb'
  });
  
  console.log(req.params);
  console.log(req.body);
  let miInsert = "UPDATE jugador SET nombre = '" + req.body.nombre + "', " +
                                      "apellidos = '" + req.body.apellidos + "', " +
                                      "fechaN = '" + req.body.fechaN + "', " +
                                      "playera = '" + req.body.playera + "', " +
                                      "equipo = '" + req.body.equipo + "' " +
                                      "WHERE idJugador = " + req.params.idJugador;
  
  console.log(miInsert);
  conexion.connect();
  conexion.query(miInsert, function(error, results, fields) {
    if (error) {
      console.log(error);
      return res.json(error);
    }
    else {
      console.log(results);
      res.json(results);
    }
  });
  conexion.end();
});



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});