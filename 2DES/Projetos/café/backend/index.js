require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')
const cors = require('cors')

const user = require('./src/routes/user.routes.js')

const app = express()
    .use(express.json())
    .use(cors())
    .use(user)

app.listen(PORT, () => {
    console.log('Serviço em execuçaõ na porta ' + PORT)
})