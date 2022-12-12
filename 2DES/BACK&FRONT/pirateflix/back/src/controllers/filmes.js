const filme = require('../models/filmes');
const con = require('../DAO/filmes.dao');
const cadastrarfilme = (req, res) => {
    con.query(filme.novoFilme(req.body), (err, result) => {
        if (err == null)
            res.json("filme Cadastrado").status(201).end();
        else
            if (err.sqlState == 23000)//Se o ni já está cadastrado
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const buscarAlgo = (req, res) => {
    con.query(filme.buscarAlgo(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const excluirFilme = (req, res) => {
    con.query(filme.excluirFilme(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.json("filme deletado").status(204).end();
            else
                res.json("filme não encontrado").status(404).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    cadastrarfilme,
    buscarAlgo,
    excluirFilme
}