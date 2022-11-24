const model = require('../models/Consulta')

const con = require('../dao/connection')

function fabrica(obj) {
    if (obj == undefined)
        return new model.Consulta()
}

const prototype = (req,res) => {
    let medication = fabrica()
    con.query(medication.readConsultas(), (err,results) => {
        if (err  == null) {
            if(results.length == 0){
                res.json( 'ok' ).end();
            }else 
                res.json({ status: "Online", registros: results.length }).end();
            } else {
                res.status(500).json({ err: err }).end();
            }
    })
}

const listarConsultas = (req, res) => {
    let medication = fabrica();
    con.query(medication.readConsultas(), (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}

const listarTratamentos = (req, res) => {
    let medication = fabrica();
    con.query(medication.readTratamentos(), (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}
const listarProfissionais = (req, res) => {
    let medication = fabrica();
    con.query(medication.readProfissionais(), (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}
const cadastrarTra = (req, res) => {
    let venda = fabrica(req.body);
    con.query(venda.createTratamentos, (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const excluirTra = (req, res) => {
    let venda = fabrica();
    con.query(venda.deleteTratamento(req.params.id_tratamento), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}



module.exports = {
    prototype,
    listarProfissionais,
    listarConsultas,
    listarTratamentos,
    cadastrarTra,
    excluirTra
}