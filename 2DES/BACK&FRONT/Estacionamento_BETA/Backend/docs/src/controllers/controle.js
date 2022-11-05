const estacionamento = require('../models/estacionamento.js')
const con = require('../models/estaciona.js')

//Listar Solicitacoes
const listarentradas = (req, res) => {
    con.query(estacionamento.readAll(req.body), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

//Listando Produtos
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
    con.query(estacionamento.editandoEntrada(req.body), (err, result) => {
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
// //Cadastradno Departamentos
// const cadastrarDepartament = (req, res) => {
//     con.query(solicita.createDepartamento(req.body), (err, result) => {
//         if (err == null) {
//             res.status(201).end();
//         } else
//             if (err.sqlState == 23000)
//                 res.status(406).json(err).end();
//             else
//                 res.status(500).json(err).end();
//     })
// }

// const excluirDepartamentos = (req, res) => {
//     con.query(solicita.toDelete(req.params), (err, result) => {
//         if (err == null)
//             if (result.affectedRows > 0)
//                 res.status(204).json(req.body).end();
//             else
//                 res.status(404).end()
//         else
//             res.status(400).json(err).end()
//     })
// }

// const ExcluirProd = (req, res) => {
//     con.query(solicita.deletePro(req.params), (err, result) => {
//         if (err == null)
//             if (result.affectedRows > 0)
//                 res.status(204).json(req.body).end();
//             else
//                 res.status(404).end()
//         else
//             res.status(400).json(err).end()
//     })
// }

module.exports = {
    listarentradas,
    listarvalores,
    cadastrarEntrada,
    alterarEntrada
}
