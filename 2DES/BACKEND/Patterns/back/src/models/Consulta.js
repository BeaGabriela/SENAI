   const  readProfissionais = () =>  {
        return 'Select * from profissionais';
    };

    const readConsultas = () =>  {
        return 'Select * from consultas';
    }

    const createConsultas= (model) =>{
        return `INSERT INTO consultas VALUES (default, '${model.paciente}', '${model.data}', '${model.horario}', '${model.id_profissionais}' ) where id_profissionais = '${model.id_profissionais}'`;
    }

    const createTratamentos =(model)=>{
        return `INSERT INTO tratamentos VALUES (default, ${model.id_consulta}, '${model.tratamento}', ${model.valor} )`;
    }

    const readTratamentos = () =>  {
        return 'SELECT * FROM tratamentos;'
    }

    const updateTratamentos = (model) => {
        return `UPDATE tratamentos SET id_consulta = ${model.id_consulta}, tratamento ='${model.tratamento}', valor=${model.valor} WHERE id_tratamento = ${model.id_tratamento}`;
    }
    const deleteTratamento = (model) => {
        return `DELETE from tratamentos WHERE id_tratamento = ${model.id_tratamento}`;
    }

    const readTratamentosId = (model) =>  {
        return `SELECT * FROM View_Tabelas where id_profissionais = ${model.id_profissioanais}`;
    }


module.exports = {
    readProfissionais,
    readConsultas,
    createConsultas,
    createTratamentos,
    readTratamentos,
    updateTratamentos,
    deleteTratamento,
    readTratamentosId

}