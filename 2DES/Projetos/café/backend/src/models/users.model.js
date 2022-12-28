const lendoUsuarios = () => {
    return 'SELECT * FROM vw_classe'
}
const login = (model) => {
    return `SELECT * FROM usuarios WHERE email='${model.email}' AND senha='${model.senha}'`
}

module.exports = {
    lendoUsuarios,
    login
}