const solicita = require('../models/Solicitacao')
const con = require('../models/SolicitaDAO')

//Listar Solicitacoes
const listarSolicitacoes = (req, res) => {
    con.query(solicita.readAll(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

//Listando Produtos
const listarProdutos = (req, res) => {
    con.query(solicita.readProdutos(req.body), (err, result) => {
        if (err == null) {
            res.json(result).end();
        } else {
            res.status(500).end();
        }
    })
}

const listarDep = (req, res) => {
    con.query(solicita.readDepartamentos(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}


const listarProdNome = (req, res) => {
    con.query(solicita.readProdNome(req.params), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    })
}

const listarSoliciDATA = (req, res) => {
    con.query(solicita.readSoliData(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    })
}

//esse
const listarTotal = (req, res) => {
    con.query(solicita.totalSoli(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    })
}
//Cadastrando Solicitacoes
const cadastrarSolicitacao = (req, res) => {
    con.query(solicita.toCreate(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(req.body).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

//Cadastrando Produtos
const cadastrarProdutos = (req, res) => {
    con.query(solicita.createProd(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}
//Cadastradno Departamentos
const cadastrarDepartament = (req, res) => {
    con.query(solicita.createDepartamento(req.body), (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    })
}

const excluirDepartamentos = (req, res) => {
    con.query(solicita.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).json(req.body).end();
            else
                res.status(404).end()
        else
            res.status(400).json(err).end()
    })
}

const ExcluirProd = (req, res) => {
    con.query(solicita.deletePro(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).json(req.body).end();
            else
                res.status(404).end()
        else
            res.status(400).json(err).end()
    })
}

module.exports = {
    listarSolicitacoes,
    listarProdutos,
    listarDep,
    listarSoliciDATA,
    listarProdNome,
    listarTotal,
    cadastrarSolicitacao,
    cadastrarProdutos,
    cadastrarDepartament,
    excluirDepartamentos,
    ExcluirProd
}
