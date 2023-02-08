const { response } = require('express')
var compromisso = require('../models/compromisso')

const teste = function (rq, res) {
    res.json('Api em funcionamento').end()
}

const create = (req, res) => {
    const compromisso = new compromisso(req.body)
    compromisso.save(err => {
        if (err) {
            res.status(500).json({ erro : err }).end()
        } else {
            res.sttaus(201).end()
        }
    })
}

module.exports = {
    teste,
    create
}