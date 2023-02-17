const express = require('express');
const cors = require('cors');

const niveis = require('../backend/src/routes/nivel.routes')
const usuario = require('../backend/src/routes/usuario.routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(niveis)
app.use(usuario)


app.listen(3000, () => { console.log("Funcionando na porta 3000"); })