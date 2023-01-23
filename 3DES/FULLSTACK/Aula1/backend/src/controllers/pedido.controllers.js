const pedido = require('../models/pedido.models.js')
const con = require('../dao/lanchonete.dao.js')

const readAll = (req, res) => {
    let string = pedido.readAll()
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end()
        } else {
            res.status(400).end()
        }
    })
}



module.exports = {
    readAll
}