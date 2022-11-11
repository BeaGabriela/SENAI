const toCreateEntrada = (model, key) => {
    return `insert into entrada values(default,'${model.vaga}', '${model.placa}', curtime(), curdate(), 'Aberto', 'Aberto', '${model.tipo}' );`
}

const editarEntrada = (model, key) => {
    return ` UPDATE entrada set datas_saida ='${model.datas_saida}', hora_saida= '${model.hora_saida}' where id=${model.id};`
} 


const readAll = () => {
    return 'SELECT * FROM entrada'
}

const readVagas = () => {
    return 'SELECT * FROM View_entradas'
}

const readvalores = () => {
    return 'SELECT * FROM valor'
}

const readFunc = () => {
    return 'SELECT * FROM funcionarios'
}

const CreateFunc = (model, key) => {
    return `insert into funcionarios values('${model.login}', '${model.password}', '${model.nome}' );`
}

const BuscarId = (model) => {
    return `SELECT * from entrada where id='${model.id}'`;
}

module.exports = {
    readAll,
    readvalores,
    toCreateEntrada,
    editarEntrada,
    BuscarId,
    readFunc,
    CreateFunc,
    readVagas
}