const express = require('express')
const cors = require('cors')

const usuarios = require('./src/routes/usuarios.routes')
const marcadores = require('./src/routes/marcadores_mapa.routes')
const contatos = require('./src/routes/contatos.routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(usuarios)
app.use(marcadores)
app.use(contatos)

app.listen(3000, () => { console.log("Funcionando na porta 3000"); })