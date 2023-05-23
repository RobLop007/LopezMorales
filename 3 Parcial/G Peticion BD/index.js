const express = require('express');
const app = express();
const  mysql = require('mysql');

app.use(express.json());

app.get('/jugador', (req, res) => {

  if(typeof(req.query.idJugador)=='undefined'){
    res.json({mensaje:"Debe enviar el parametro idJugador en la cadena de consulta"});
  } else {
    var conexion = mysql.createConnection({
      host      : 'localhost',
      user      : 'root',
      password  : '',
      database  : 'ejemploweb'
    });
  
    conexion.connect();
    conexion.query(`SELECT * FROM jugador where idJugador=${req.query.idJugador}`, function(error, results, fields){
      if (error) return res.json(error);
      if (results.length == 0) return res.json("No se encontro este jugador");
      res.json(results);
    })
    conexion.end();
  }
}); 

app.post('/jugador', (req, res) => {
  res.send('Peticion POST a jugador');
});

app.listen(8085, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});