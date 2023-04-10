const express = require('express');
const rotaInstrumento = require("./rotas/instrumentos");

const app = express()

app.use('/oi', rotaInstrumento);
const port = 4000;


app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})