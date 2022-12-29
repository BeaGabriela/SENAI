const jwt = require('jsonwebtoken')
require('dotenv').config()

const validarAcessoAdmin = (req, res, next) => {
    const token = req.headers.authorization

    jwt.verify(token, process.env.KEY, (err, user) => {
        if(err != null){
            res.status(404).json(err).end()

        }else{
            if(user. id_classificacao == 1){
                next()
            }else{
                res.status(401).json({ msg: 'Usuario não autorizado.'}).end()
            }
        }
    })
}

const validarAcessoUser = (req, res, next) => {
    const token = req.headers.authorization

    jwt.verify(token, process.env.KEY, (err, user) => {
        if(err != null){
            res.status(404).json(err).end()

        }else{
            if(user. id_classificacao == 2){
                next()
            }else{
                res.status(401).json({ msg: 'erro'}).end()
            }
        }
    })
}

module.exports = {
    validarAcessoAdmin,
    validarAcessoUser
}