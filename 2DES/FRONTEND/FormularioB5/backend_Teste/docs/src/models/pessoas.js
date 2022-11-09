const toCreate = (model, key) => {
    return `insert into cliente values('${model.nome}','${model.cpf}', '${model.ddd}', '${model.telefone}', '${model.tipo}', '${model.logradouro}', '${model.bairro}','${model.n_casa}','${model.cep}' ,'${model.cidade}','${model.estado}' );`
}

const readAll = () => {
    return 'SELECT * FROM cliente'
}


module.exports = {
    readAll,
    toCreate

}