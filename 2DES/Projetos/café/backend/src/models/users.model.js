const lendoUsuarios = () => {
    return 'SELECT * FROM vw_classe'
}
const login = (body) => {
    return `SELECT * FROM vw_classe WHERE email='${body.email}' AND senha='${body.senha}'`
}

module.exports = {
    lendoUsuarios,
    login
}