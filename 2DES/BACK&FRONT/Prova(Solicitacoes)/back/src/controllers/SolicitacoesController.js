const solicita = require('../models/Solicitacao')
const con = require('../models/SolicitaDAO')

const listarSolicitacoes = (req, res) => {
    con.query(solicita.readAll(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const cadastrarSolicitacao = (req, res) => {
    con.query(solicita.toCreate(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
 }

module.exports = {
    listarSolicitacoes,
    cadastrarSolicitacao
}