

const toCreate = (model, key) => {
    return ` call solicita_um_item(${model.n_sol}, ${model.depto}, ${model.func}, ${model.prod}, ${model.qtd}, ${model.total} )`
}

const readAll = () =>{
    return 'SELECT * FROM View_Solicitacoes'
}

module.exports = {
    toCreate,
    readAll
}