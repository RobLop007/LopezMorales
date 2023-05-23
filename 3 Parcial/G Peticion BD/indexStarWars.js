const express = require('express');
const app = express();
const cors = require('cors');
const  mysql = require('mysql');

app.use(cors());
app.use(express.json());

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
  let miInsert = "INSERT INTO jugador (nombre, apellidos, fechaN, playera, equipo)  values ("+                                    
                                    "'" + req.body.nombre + "',"   +
                                    "'" + req.body.apellidos + "'," +
                                    "'" + req.body.fechaN + "',"    +
                                    "" + req.body.playera + ","   +
                                    "'" + req.body.equipo + "')";
          console.log(miInsert);
          conexion.connect();
  conexion.query(miInsert, function(error, results, fields){
  if (error) return res.json(error);
  else{console.log(results);
          res.json(results);}      
    res.json(results);
  })
conexion.end();
}); 


app.listen(8080, () => {
  console.log(`Example app listening on port`);
});