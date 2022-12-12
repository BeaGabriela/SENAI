const buscarAlgo = (model) => {
    return `SELECT * FROM filmes WHERE titulo like '%${model.titulo}%'`;
}

const excluirFilme = (model) => {
    return `DELETE FROM filmes WHERE id=${model.id}`;
}

const novoFilme = (model) => {
    return `INSERT INTO filmes VALUES (default,'${model.titulo}','${model.lancamento}','${model.cartaz}','${model.imagem}')`;
}

module.exports = {
    buscarAlgo,
    excluirFilme,
    novoFilme
}