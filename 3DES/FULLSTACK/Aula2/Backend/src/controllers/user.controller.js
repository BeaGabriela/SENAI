const user = require('../models/user.model')
const con = require('../dao/tarefas.dao')

const Logar = (req, res) => {
    let string = user.Logar(req.body)
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).json(result).end()
        } else {
            res.status(400).end()
        }
    })
}

module.exports = {
    Logar
}