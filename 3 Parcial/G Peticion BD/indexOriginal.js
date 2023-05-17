const express = require('express');
const app = express();
const  mysql = require('mysql');

app.use(express.json());

app.get('/jugador', (req, res) => {
    var conexion = mysql.createConnection({
      host      : 'localhost',
      user      : 'root',
      password  : '',
      database  : 'ejemploweb'
    });
  
    conexion.connect();
    conexion.query(`SELECT * FROM jugador `, function(error, results, fields){
      if (error) return res.json(error);      
      res.json(results);
    })
    conexion.end();
}); 

app.post('/jugador', (req, res) => {
  res.send('Peticion POST a jugador');
});

app.listen(8085, () => {
  console.log(`Example app listening on port`);
});