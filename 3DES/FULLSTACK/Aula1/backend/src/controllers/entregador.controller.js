const entregadores = require('../models/entregadores.model.js')
const con = require('../dao/lanchonete.dao.js')

const readAll = (req, res) => {
    let string = entregadores.readAll()
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end()
        } else {
            res.status(400).end()
        }
    })
}

const createNew = (req, res) => {
    let string = entregadores.createNew()
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).json(result).end()
        } else {
            res.status(400).end()
        }
    })
}

module.exports = {
    readAll,
    createNew
}