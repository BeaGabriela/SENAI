require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const mongoDB = process.env.DATABASE_URL
mongoose.connect(mongoDB, { useNewUrlParser : true})
mongoose.Promise = global.Promise


const routes = require('./src/routes/compromisso.routes')

const app = express()
    .use(express.json())
    .use(cors())
    .use(routes)

app.listen(PORT, () => {
    console.log('Serviço em execuçaõ na porta ' + PORT)
})