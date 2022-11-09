const toCreateEntrada = (model, key) => {
    return `insert into entrada values(default,'${model.vaga}', '${model.placa}', curtime(), curdate(), NULL, NULL, '${model.tipo}' );`
}

const editarEntrada = (model, key) => {
    return ` UPDATE entrada set datas_saida ='${model.datas_saida}', hora_saida= '${model.hora_saida}' where id=${model.id};`
} 


const readAll = () => {
    return 'SELECT * FROM entrada'
}

const readvalores = () => {
    return 'SELECT * FROM valor'
}

// const readProdNome = (model) => {
//     return `SELECT * FROM Prod_Dep WHERE Nome_produto like '%${model.Nome_produto}%'`;
// }

// const readDepartamentos = () => {
//     return 'SELECT * FROM Departamentos'
// }

// const readSoliData = (model) => {
//     return `SELECT * FROM Solicitacoes WHERE Data_sol like '%${model.Data_sol}%'`;
// }

const BuscarId = (model) => {
    return `SELECT * from entrada where id='${model.id}'`;
}

// const toDelete = (model) => {
//     return `DELETE FROM Departamentos WHERE Cod_Depto = '${model.Cod_Depto}'`;
// }

// const deletePro = (model) => {
//     return `DELETE FROM Produtos WHERE Cod_Produto = '${model.Cod_Produto}'`;
// }

module.exports = {
    readAll,
    readvalores,
    toCreateEntrada,
    editarEntrada,
    BuscarId
}