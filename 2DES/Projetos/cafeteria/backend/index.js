const express = require('express');
const cors = require('cors');

const app = express();

const niveis = require('../backend/src/routes/nivel.routes')
const usuario = require('../backend/src/routes/usuario.routes')
const topico = require('../backend/src/routes/topico.routes')
const comida = require('../backend/src/routes/comida.routes')
const popular = require('../backend/src/routes/popular.routes')
const pedidos = require('../backend/src/routes/pedidos.routes')

app.use(cors());

app.use(express.json());
app.use(niveis)
app.use(usuario)
app.use(topico)
app.use(comida)
app.use(popular)
app.use(pedidos)

app.listen(3000, () => { console.log("Funcionando na porta 3000"); })