const express = require('express')
const app = express()
const port = 8082

app.use(express.json());

app.get('/usuarios', (req, res) => {

  var conexion = mysql.createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : 'Roblop',
    database  :''
  });

  conexion.connect();
  conexion.query(`SELECT * FROM tabla WHERE id=${req.query.id}`, function(error, results, fields){
    if(error) throw error;
    res.json(results);
  })
  conexion.end();
  console.log(req.query);
  //res.send('Peticion GET a Usuarios ' + req.query.nombre);
  res.json({peticion:"get", nombre:req.query.nombre});
});

app.post('/usuarios', (req, res) => {
  console.log(req.body);
  res.send('Peticion POST a Usuarios');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});