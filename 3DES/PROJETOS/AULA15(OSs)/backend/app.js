require('dotenv').config()

const PORT = process.env.PORT || 3000
const express = require('express')
const methodOverride = require('method-override')

const colaborador = require('./src/routes/colaborador.routes')
const comentario = require('./src/routes/comentario.routes')
const os = require('./src/routes/os.routes')

const app = express()
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use('/', colaborador)
app.use('/', comentario)
app.use('/', os)


app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT))


