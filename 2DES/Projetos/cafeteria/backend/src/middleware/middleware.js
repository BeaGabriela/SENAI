const jwt = require('jsonwebtoken');

const validaAcesso = (req, res, next) => {
    let token = req.headers.authorization;

    if(token) {
        token = token.split(' ')[1];
        jwt.verify(token, process.env.KEY, (err, data) => {
            if(err != null) res.status(404).json(err).end();
            else {
                console.log(data)
                if(data.nivel == 1) {
                    next();
                }else {
                    res.status(401).end();
                    console.log(data);
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