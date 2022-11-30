const Alunos = require('../models/alunos.model')
const con = require('../dao/connection')
const Composite = require('../models/Composite')

const readAll = (req, res) => {
    con.query(Alunos.readAll(), (err,result) => {
        if(err == null){
            res.json(result).end()
        }else{
            res.json(err).end()
        }
    })
}


const readCursoAluno = (req, res) => {
    con.query(Alunos.readCursoAluno(req.params.id), (err,result) => {
        if(err == null){
            res.json(Composite.AlunosId(result)).end()
        }else{
            res.json(err).end()
        }
    })
}


const create = (req, res) => {
    con.query(Alunos.create(req.body), (err,result) => {
        if(err == null){
            res.status(201).end()
        }else{
            res.json(err).end()
        }
    })
}

const update = (req, res) => {
    con.query(Alunos.update(req.body), (err,result) => {
        if(err == null){
            res.status(200).end()
        }else{
            res.json(err).end()
        }
    })
}

const del = (req, res) => {
    con.query(Alunos.delete(req.body), (err,result) => {
        if(err == null){
            res.status(200).end()
        }else{
            res.json(err).end()
        }
    })
}

module.exports = {
    readAll,
    create,
    update,
    del,
    readCursoAluno
}