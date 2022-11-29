const Tratamento = require('../models/Tratamento')
const Composite = require('../models/Composite')
const con = require('../dao/connection')

const readAll = (req, res ) => {
    con.query(Tratamento.toreadAll(), (err, result) => {
        if(err != null) {
            res.json(result).end()
        }
    })
}

const readId = (req, res ) => {
    con.query(Tratamento.readId(req.params.id), (err, result) => {
        if(err == null) {
            res.json(Composite.profissional(result)).end()
        }else{
            res.json(err).end()
        }
    })
}


const create = () => {
    con.query(Tratamento.toCreate(req.body), (err, result) => {
        if(err == null){
            res.status(201).end()
        }
    })
}

const update = () => {
    con.query(Tratamento.update(req.body), (err, result) => {
        if(err == null){
            res.status(200).end()
        }
    })
}

const del = () => {
    con.query(Tratamento.delete(req.body), (err, result) => {
        if(err == null){
            res.status(200).end()
        }
    })
}


module.exports = {
    readAll,
    create,
    update,
    del,
    readId
}