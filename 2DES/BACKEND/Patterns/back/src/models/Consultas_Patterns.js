class Consulta {
    tratamentos = []
    constructor(data) {
        this.id_consulta = data.id_consulta
        this.paciente = data.paciente
        this.data = data.data
        this.horario = data.horario
        if(data.tratamentos != undefined)
        data.tratamentos.forEach(e => {
            this.tratamentos.push(e)
        })
    }
    addTratamento(trat){
       this.tratamentos.push(trat)
    }

    static readConsultas = () =>  {
        return 'Select * from consultas';
    }

    static createConsultas= (model) =>{
        return `INSERT INTO consultas VALUES (default, '${model.paciente}', '${model.data}', '${model.horario}', '${model.id_profissionais}' ) where id_profissionais = '${model.id_profissionais}'`;
    }

} 

module.exports = {
    Consulta
}