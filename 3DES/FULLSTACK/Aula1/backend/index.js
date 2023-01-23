require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')
const cors = require('cors')

const pedido = require('./src/routes/entregadores.routes.js')
const entregadores = require('./src/routes/pedido.route.js')

const app = express()
    .use(express.json())
    .use(cors())
    .use(pedido)
    .use(entregadores)

app.listen(PORT, () => {
    console.log('Serviço em execuçaõ na porta ' + PORT)
})