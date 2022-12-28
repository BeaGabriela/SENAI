const ligacao = require('../models/users.model.js')
const con = require('../dao/cafeteria.dao.js')
const jwt = require('jsonwebtoken')

const listandoUsers = (req,res) =>{
    con.query(ligacao.lendoUsuarios(), (err, result) => {
        if(err == null){
            res.json(result).end()
        }else{
            res.status(505).end()
        }
    })
}

const login = (req,res) => {
    con.query(ligacao.login(req.body), (err, user) => {
        if(err == null){
            console.log(process.env.KEY)
            console.log('e')
            jwt.sign({...user[0]}, process.env.KEY, {expiresIn: '1m'}, (error, token) => {
                if(error == null){
                    user['token'] = token
                    res.status(200).json(user).end()
                }else{
                    console.log(error)
                    res.status(404).json(error).end()
                }
            })

        }else{
            res.status(404).json(err).end()
        }
    })
}



module.exports = {
    listandoUsers,
    login
}