const cadastrar = (model) => {
    return `INSERT INTO passageiros VALUES (default, '${model.nome}', '${model.data}', '${model.cpf}', '${model.dataViagem}', '${model.horaViagem}', ${model.valorTotal}, '${model.assento}')`
}

module.exports ={
    cadastrar
}