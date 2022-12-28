const jwt = require('jsonwebtoken')
require('dotenv').config()

const validarAcesso = (req, res, next) => {
    const token = req.headers.authorization

    jwt.verify(token, process.env.KEY, (err,user) => {
        if(err != null){
            res.status(404).json(err).end()

        }else{
            if(user.tipo === 'user'){
                next()
            }else{
                res.status(401).end()
            }
        }
    })

    res.status(200).end()
}

module.exports = {
    validarAcesso
}