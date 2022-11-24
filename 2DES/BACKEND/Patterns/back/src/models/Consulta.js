class Consulta {

    readProfissionais() {
        return 'Select * from profissionais';
    }
    readConsultas() {
        return 'Select * from consultas';
    }

    deleteTratamento (id_tratamento) {
        return `DELETE from tratamentos WHERE id_tratamento = ${id_tratamento}`;
    }

    createConsultas(model){
        return `INSERT INTO consultas VALUES (default, '${model.paciente}', '${model.data}', '${model.horario}', '${model.id_profissionais}' ) where id_profissionais = '${model.id_profissionais}'`;
    }

    createTratamentos(model){
        return `INSERT INTO tratamentos VALUES (default, '${model.id_consulta}', '${model.tratamento}', ${model.valor} ) where id_consulta = '${model.id_consulta}'`;
    }

    updateTratamentos(model){
        return `UPDATE tratamentos SET tratamento='${model.tratamento}', valor='${model.valor}' WHERE id_tratamento = '${model.id_tratamento}'`;
    }

    readTratamentos() {
        return 'Select * from tratamentos';
    }
}


module.exports = {
    Consulta
}