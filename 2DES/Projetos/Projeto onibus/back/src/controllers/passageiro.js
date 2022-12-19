const onibus = require('../models/passageiros.js')
const con = require('../dao/onibus.js')



const cadastrarPassageiros = (req, res) => {
    con.query(onibus.cadastrar(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    cadastrarPassageiros
}