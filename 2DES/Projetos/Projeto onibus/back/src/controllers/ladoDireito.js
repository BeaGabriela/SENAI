const onibus = require('../models/ladoDireito.js')
const con = require('../dao/onibus.js')



const listarAssentos = (req, res) => {
    con.query(onibus.readAll(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    listarAssentos
}