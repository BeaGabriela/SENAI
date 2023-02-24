const express = require('express');
const cors = require('cors');

const niveis = require('../backend/src/routes/nivel.routes')
const usuario = require('../backend/src/routes/usuario.routes')
const motorista = require('../backend/src/routes/motoristas.routes')
const Tveiculos = require('../backend/src/routes/tipoVeiculos.routes')
const veiculos = require('../backend/src/routes/veiculos.routes')
const operacoes = require('../backend/src/routes/operacoes.routes')
const manutencao = require('../backend/src/routes/manutencao.routes')
const Rmanutencao = require('../backend/src/routes/Rmanutencao.routes')
const Roperacoes = require('../backend/src/routes/Roperacoes.routes')

const app = express();

// const corsOptions = {
//     origin: 'http://localhost:3000/',
//     credentials: true,
//     optionSuccessStatus: 200
// }

app.use(cors());

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', "http://localhost:3000");
//     res.header('Access-Control-Allow-Headers', true);
//     res.header('Access-Control-Allow-Credentials', true);
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     next();
// });

app.use(express.json());
app.use(niveis)
app.use(usuario)
app.use(motorista)
app.use(Tveiculos)
app.use(veiculos)
app.use(operacoes)
app.use(manutencao)
app.use(Rmanutencao)
app.use(Roperacoes)


app.listen(3000, () => { console.log("Funcionando na porta 3000"); })
