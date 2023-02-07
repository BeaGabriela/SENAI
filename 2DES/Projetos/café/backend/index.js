require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')
const cors = require('cors')

const user = require('./src/routes/user.routes.js')
const receitas = require('./src/routes/comidas.routes.js')
const medida = require('./src/routes/medidas.routes')

const app = express()
    .use(express.json())
    .use(cors())
    .use(user)
    .use(receitas)
    .use(medida)

app.listen(PORT, () => {
    console.log('Serviço em execuçaõ na porta ' + PORT)
})