const medication = require('../models/Consulta')
const con = require('../dao/connection')


const listarConsultas = (req, res) => {
    con.query(medication.readConsultas(), (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}

const listarProfissionais = (req, res) => {
    con.query(medication.readProfissionais(), (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}
const listarTratamentoaId = (req, res) => {
    con.query(medication.readTratamentosId(req.params), (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}


const listarTratamentos = (req, res) => {
    con.query(medication.readTratamentos(), (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}

const cadastrarTra = (req, res) => {
    con.query(medication.createTratamentos(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const excluirTra = (req, res) => {
    con.query(medication.deleteTratamento(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const alterarTrat = (req, res) => {
    con.query(medication.updateTratamentos(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}




module.exports = {
    listarProfissionais,
    listarTratamentoaId,
    listarConsultas,
    listarTratamentos,
    cadastrarTra,
    excluirTra,
    alterarTrat
}