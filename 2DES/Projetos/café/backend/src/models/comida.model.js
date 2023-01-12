const readAll = () => {
     return 'SELECT * FROM comidas order by id_comida'
}

const toAscii = (dados) => {
    dados.forEach(d => {
        if(d.img != null ){
            d.img = d.img.toString('ascii')
        }
        return dados
    })
}

module.exports = {
    readAll,
    toAscii
}