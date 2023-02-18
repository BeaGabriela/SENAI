const express = require('express');
const cors = require('cors');

const niveis = require('../backend/src/routes/nivel.routes')
const usuario = require('../backend/src/routes/usuario.routes')
const motorista = require('../backend/src/routes/motoristas.routes')
const Tveiculos = require('../backend/src/routes/tipoVeiculos.routes')
const veiculos = require('../backend/src/routes/veiculos.routes')
const frotas = require('../backend/src/routes/frotas.routes')
const operacoes = require('../backend/src/routes/operacoes.routes')
const manutencao = require('../backend/src/routes/manutencao.routes')
const Rmanutencao = require('../backend/src/routes/Rmanutencao.routes')
const Roperacoes = require('../backend/src/routes/Roperacoes.routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(niveis)
app.use(usuario)
app.use(motorista)
app.use(Tveiculos)
app.use(veiculos)
app.use(frotas)
app.use(operacoes)
app.use(manutencao)
app.use(Rmanutencao)
app.use(Roperacoes)


app.listen(3000, () => { console.log("Funcionando na porta 3000"); })