require('dotenv').config()
const PORT = process.env.PORT || 3000
const express = require('express')
const cors = require('cors')

const alunos = require('./src/routes/alunos.routes')
const cursos = require('./src/routes/cursos.routes')

const app = express()
.use(express.json())
.use(cors())
 .use("/alunos", alunos )
 .use("/cursos", cursos )

app.listen(PORT, () => {
    console.log('API em execução na porta '+ PORT)
})