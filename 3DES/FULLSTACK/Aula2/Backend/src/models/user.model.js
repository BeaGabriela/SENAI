const Logar = (model) => {
     return `SELECT * FROM usuarios WHERE email ='${model.email}' AND senha= '${model.senha}' `
}

module.exports = {
    Logar
}