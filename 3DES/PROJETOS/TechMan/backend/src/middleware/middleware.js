const jwt = require('jsonwebtoken');

const validaAcesso = (req, res, next) => {
    let token = req.headers.authorization;

    if(token) {
        token = token.split(' ')[1];
        jwt.verify(token, process.env.KEY, (err, data) => {
            if(err != null) res.status(404).json(err).end();
            else {
                console.log(data)
                if(data.perfil === 2) {
                    console.log(data)
                    next();
                }else {
                    res.status(401).end();
                }
            }
        })
    }else {
        res.status(401).end();
    }
}

module.exports = {
    validaAcesso
}