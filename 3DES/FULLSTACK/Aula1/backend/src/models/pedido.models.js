const readAll = () => {
    return 'SELECT * FROM pedidos;'
}

const createNew =  (model) => {
    return `INSERT INTO pedidos VALUES(default,'${model.cliente}','${model.endereco}', '${model.produto}', curdate(), curtime(), null, null, ${model.id_entregador})`
}

const updateHora_Entrega = (model) => {
    return `UPDATE pedidos SET hora_entrega = curtime() WHERE id_pedido = ${model.id_pedido}`
}

const updateHora_fim = (model) => {
    return `UPDATE pedidos SET hora_fim = curtime() WHERE id_pedido = ${model.id_pedido}`
}


module.exports = {
   readAll,
   createNew,
   updateHora_Entrega,
   updateHora_fim
}