const ligacao = require('../models/users.model.js')
const con = require('../dao/cafeteria.dao.js')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const listandoUsers = (req, res) => {
    con.query(ligacao.lendoUsuarios(), (err, result) => {
        if (err == null) {
            res.json(result).end()
        } else {
            res.status(505).end()
        }
    })
}

const login = (req, res) => {
    const user = req.body
    con.query(ligacao.login(user), (err, result) => {
        if (err == null) {
            console.log(process.env.KEY)
            if (user.email == result[0].email && user.senha == result[0].senha) {
                let returno = {
                    "id_user": result[0].id_user,
                    "email": result[0].email,
                    "role": result[0].role,
                }
                jwt.sign(returno, process.env.KEY, (error, token) => {
                    if (error == null) {
                        returno["token"] = token
                        console.log(token)
                        res.status(200).json(returno).end()
                    } else {
                        console.log(error)
                        res.status(404).json(error).end()
                    }
                })


            } else {
                res.status(404).json(err).end()
            }
        }
    })

}

const cadastrarUser = (req, res) => {
    con.query(ligacao.cadastrarUsuario(req.body), (err, result) => {
        if (err == null) {
            res.status(201).end()
        } else {
            res.status(505).end()
        }
    })
}





module.exports = {
    listandoUsers,
    login,
    cadastrarUser

}