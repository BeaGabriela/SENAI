const readAll = () => {
     return 'SELECT * FROM entregadores ;'
}

const readEntregador = (model) => {
    return `SELECT * FROM entregadores WHERE email =${model.email} AND senha= ${model.senha} ;`
}


const createNew = (model) => {
    return `INSERT INTO entregadores VALUES(default, '${model.nome}', '${model.email}', '${model.senha}', '${model.veiculo}')`
}


module.exports = {
    readAll,
    createNew,
    readEntregador
}