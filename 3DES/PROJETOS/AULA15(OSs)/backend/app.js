require('dotenv').config()

const PORT = process.env.PORT || 3000
const express = require('express')
const methodOverride = require('method-override')

const app = express()
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use('/index', (req, res) => {
    res.render('index', { title: "Página Inicial" })
})

app.use('/oss', (req, res) => {
    let dados = [
        {id: 1, descricao: "Torneira pingando"},
        {id: 2, descricao: "Torneira quebrada"},
        {id: 3, descricao: "Torneira trincada"},
    ]
    res.render('oss', { title: "Ordens de serviço", dados: dados })
})

app.listen(PORT, () => console.log('Servidor rodando na porta ' + PORT))


