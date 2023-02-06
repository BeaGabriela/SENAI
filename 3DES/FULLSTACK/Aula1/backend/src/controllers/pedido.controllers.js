const pedido = require('../models/pedido.models.js')
const con = require('../dao/lanchonete.dao.js')

const readAll = (req, res) => {
    let string = pedido.readAll()
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        } else {
            res.status(400).end()
        }
    })
}
const readCozinha = (req, res) => {
    let string = pedido.readCozinha()
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end()
        } else {
            res.status(400).end()
        }
    })
}

const readPedidoEntregador = (req, res) => {
    let string = pedido.readEntregador(req.params)
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end()
        } else {
            res.status(400).end()
        }
    })
}

const createNew = (req, res) => {
    let string = pedido.createNew(req.body)
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).json(result).end()
        } else {
            res.status(400).end()
        }
    })
}

const updateHora_e = (req, res) => {
    let string = pedido.updateHora_Entrega(req.body)
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        } else {
            res.status(400).end()
        }
    })
}

const updateHora_fim = (req, res) => {
    let string = pedido.updateHora_fim(req.body)
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        } else {
            res.status(400).end()
        }
    })
}



module.exports = {
    readAll,
    createNew,
    updateHora_e,
    updateHora_fim,
    readPedidoEntregador,
    readCozinha
}