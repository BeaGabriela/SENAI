const jwt = require('jsonwebtoken');
require('dotenv').config();

const validaAcesso = (req, res, next) => {
    const token = req.headers.authorization;

    if(token) {
        token = token.split(' ')[1];
        jwt.verify(token, process.env.KEY, (err, data) => {
            if (err != null) {
                res.status(404).json(err).end();
              
            } else {
                if (data.email == req.body.email && data.senha == req.body.senha) {
                    next();
                } else {    
                    res.status(401).end();
                }
            }
        })
    }

    }

module.exports = {
    validaAcesso
}