const clientes = require('../models/pessoas.js')
const con = require('../models/cliente.js')


const listarClientes = (req, res) => {
    con.query(clientes.readAll(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}



const cadastrarPessoa = (req, res) => {
    con.query(clientes.toCreate(req.body), (err, result) => {
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
    cadastrarPessoa,
    listarClientes
    
}
