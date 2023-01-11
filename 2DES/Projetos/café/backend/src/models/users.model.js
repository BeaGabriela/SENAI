const lendoUsuarios = () => {
    return 'SELECT * FROM vw_classe'
}
const login = (body) => {
    return `SELECT * FROM vw_classe WHERE email='${body.email}' AND senha='${body.senha}'`
}

const cadastrarUsuario = (model) => {
    return `INSERT INTO usuarios VALUES(DEFAUlT, '${model.nome}', '${model.email}', '${model.senha}', 2)`
}

module.exports = {
    lendoUsuarios,
    login,
    cadastrarUsuario
}