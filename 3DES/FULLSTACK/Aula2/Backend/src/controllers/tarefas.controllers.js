const tarefas = require('../models/tarefas.models')
const con = require('../dao/tarefas.dao')

const readAll = (req, res) => {
    let string = tarefas.readAll()
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        } else {
            res.status(400).end()
        }
    })
}

const readAbertas = (req, res) => {
    let string = tarefas.readAbertas()
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        } else {
            res.status(400).end()
        }
    })
}

const readFinalizadas = (req, res) => {
    let string = tarefas.readFinalizadas()
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        } else {
            res.status(400).end()
        }
    })
}

const readCanceladas = (req, res) => {
    let string = tarefas.readCanceladas()
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        } else {
            res.status(400).end()
        }
    })
}


const createNew = (req, res) => {
    let string = tarefas.createNew(req.body)
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).json(result).end()
        } else {
            res.status(400).end()
        }
    })
}


const updateHora_fim = (req, res) => {
    let string = tarefas.updateHora_fim(req.body)
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        } else {
            res.status(400).json(err).end()
        }
    })
}

module.exports = {
    readAll,
    readAbertas, 
    readCanceladas,
    readFinalizadas,
    createNew,
    updateHora_fim

}
