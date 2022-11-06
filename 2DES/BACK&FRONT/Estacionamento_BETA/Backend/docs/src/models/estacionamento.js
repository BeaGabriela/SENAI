const toCreateEntrada = (model, key) => {
    return `insert into entrada values(default,'${model.vaga}', '${model.placa}', curtime(), curdate(), NULL, NULL, '${model.tipo}' );`
}

const editarEntrada = (model, key) => {
    return ` UPDATE entrada set datas_saida ='${model.datas_saida}', hora_saida= '${model.hora_saida}' where id=${model.id};`
} //terminar aqui!!!!!

// const createDepartamento = (model, key) => {
//     return `INSERT INTO Departamentos VALUES ('${model.Cod_Depto}', '${model.Nome_Depto}')`
// }

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

// const totalSoli = (model) => {
//     return `SELECT COUNT(Num_Sol), Cod_Func FROM Solicitacoes where Cod_Func like '%${model.Cod_Func}%'  GROUP By Cod_Func`;
// }

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
    editarEntrada
}