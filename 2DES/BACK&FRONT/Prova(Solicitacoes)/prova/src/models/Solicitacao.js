

const toCreate = (model, key) => {
    return ` call solicita_um_item(${model.n_sol}, ${model.depto}, ${model.func}, ${model.prod}, ${model.qtd}, ${model.total} )`
}

const createProd = (model, key) => {
    return `INSERT INTO Produtos VALUES ('${model.Cod_Produto}','${model.Nome_Produto}' )`
}

const createDepartamento = (model, key) => {
    return `INSERT INTO Departamentos VALUES ('${model.Cod_Depto}', '${model.Nome_Depto}')`
}

const readAll = () => {
    return 'SELECT * FROM View_Solicitacoes'
}

const readProdutos = () => {
    return 'SELECT * FROM Produtos'
}

const readProdNome = (model) => {
    return `SELECT * FROM Prod_Dep WHERE Nome_produto like '%${model.Nome_produto}%'`;
}

const readDepartamentos = () => {
    return 'SELECT * FROM Departamentos'
}

const readSoliData = (model) => {
    return `SELECT * FROM Solicitacoes WHERE Data_sol like '%${model.Data_sol}%'`;
}

const totalSoli = (model) => {
    return `SELECT COUNT(Num_Sol), Cod_Func FROM Solicitacoes where Cod_Func like '%${model.Cod_Func}%'  GROUP By Cod_Func`;
}

const toDelete = (model) => {
    return `DELETE FROM Departamentos WHERE Cod_Depto = '${model.Cod_Depto}'`;
}

module.exports = {
    toCreate,
    createProd,
    createDepartamento,
    readAll,
    readProdutos,
    readSoliData,
    readProdNome,
    readDepartamentos,
    totalSoli,
    toDelete
}