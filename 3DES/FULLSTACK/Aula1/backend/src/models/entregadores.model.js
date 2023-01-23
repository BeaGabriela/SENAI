const readAll = () => {
     return 'SELECT * FROM entregadores;'
}

const createNew = (model) => {
    return `INSERT INTO entregadores VALUES(default, '${model.nome}', '${model.email}', '${model.senha}', '${model.veiculo}')`
}


module.exports = {
    readAll,
    createNew
}