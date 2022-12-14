const estacionamento = require('../models/estacionamento.js')
const con = require('../models/estaciona.js')


const listarentradas = (req, res) => {
    con.query(estacionamento.readAll(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const listarvagas = (req, res) => {
    con.query(estacionamento.readVagas(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const listarvalores = (req, res) => {
    con.query(estacionamento.readvalores(req.body), (err, result) => {
        if (err == null) {
            res.json(result).end();
        } else {
            res.status(500).end();
        }
    })
}


const cadastrarEntrada = (req, res) => {
    con.query(estacionamento.toCreateEntrada(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(req.body).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}



//Editando 
const alterarEntrada = (req, res) => {
    con.query(estacionamento.editarEntrada(req.body), (err, result) => {
        if (err == null) {
            if (result.affectedRows > 0) {
                res.status(200).json(req.body).end();
            } else {
                res.status(404).end()
            }
        } else {
            res.status(500).json(err).end()
        }

    });
}

const buscarId = (req, res) => {
    con.query(estacionamento.BuscarId(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    })
}

const listarFUNC = (req, res) => {
    con.query(estacionamento.readFunc(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const cadastrarFunc = (req, res) => {
    con.query(estacionamento.CreateFunc(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(req.body).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

module.exports = {
    listarentradas,
    listarvalores,
    cadastrarEntrada,
    alterarEntrada,
    buscarId,
    listarFUNC,
    cadastrarFunc,
    listarvagas
}
