const comidas = require('../models/tabelas.medidas')
const con = require('../dao/cafeteria.dao.js')

const listarleite = (req, res) => {
    let string = comidas.readleite()
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end()
        } else {
            res.status(400).end()
        }
    })
}
const listarAcucar = (req, res) => {
    let string = comidas.readAcucar()
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end()
        } else {
            res.status(400).end()
        }
    })
}
const listarTempe = (req, res) => {
    let string = comidas.readTemperatura()
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end()
        } else {
            res.status(400).end()
        }
    })
}
const listarMedidas = (req, res) => {
    let string = comidas.readMedidas()
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end()
        } else {
            res.status(400).end()
        }
    })
}



module.exports = {
    listarleite,
    listarAcucar,
    listarTempe,
    listarMedidas
}