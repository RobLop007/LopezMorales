const express = require('express')
const app = express()
const port = 8082

app.use(express.json());

app.get('/usuarios', (req, res) => {
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