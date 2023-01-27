const readAll = () => {
    return 'SELECT * FROM tarefasGerais;'
}

const readAbertas =() => {
    return 'SELECT * FROM tarefasAbertas'
}

const readFinalizadas =() => {
    return 'SELECT * FROM tarefasFinalizadas'
}

const readCanceladas =() => {
    return 'SELECT * FROM tarefasCanceladas;'
}

const createNew = (model) => {
    return `INSERT INTO tarefas VALUE(default,'${model.descricao}', curtime(), NULL, 1)`
}

const updateHora_fim = (model) => {
    return `UPDATE tarefas SET hora_final = curtime(), id_status_t = ${model.id_status_t} WHERE id_tarefa = ${model.id_tarefa}`
}



module.exports = {
    readAll,
    createNew,
    updateHora_fim,
    readAbertas,
    readFinalizadas,
    readCanceladas

}