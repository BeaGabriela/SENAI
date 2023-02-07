const cadastrarComida = (model, file) => {
    if (file != null) {
        model.img = file.buffer.toString('base64')
        return `INSERT INTO comidas VALUES(default, ${model.id_topico},'${model.img}', '${model.nome_comida}', '${model.descricao}', ${model.valor} )`
    } else {
        return `INSERT INTO comidas VALUES(default, ${model.id_topico},null, '${model.nome_comida}', '${model.descricao}', ${model.valor} )`
    }

}

const cadastrarProporcao = (model) => {
    return `INSERT INTO proporcoes VALUES(default, ${model.temperatura},${model.tamanho},${model.leite}, ${model.adocar}')`
}


const readAll = () => {
    return 'SELECT * FROM vw_info;'
}


const readPopular = () => {
    return 'SELECT * FROM vw_popular;'
}

const toAscii = (dados) => {
    dados.forEach(d => {
        if (d.img != null) d.img = d.img.toString('ascii')
    })
    return dados
}

module.exports = {
    readAll,
    readPopular,
    toAscii,
    cadastrarComida,
    cadastrarProporcao

}