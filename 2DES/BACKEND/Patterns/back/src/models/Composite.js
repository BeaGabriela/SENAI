const Profissional = require('./Profissionais')
const Consulta = require('./Consultas_Patterns')
const Tratamento = require('./Tratamento')

const profissional = (lista) => {
    let consultas = []
    let i = 0;
    let id_consulta = lista[i].id_consulta
    consultas.push(new Consulta(lista[i]))
    lista.forEach(e => { //Percorrendo lista
        if(id_consulta != e.id_consulta){ //Eliminando consultas duplicadas
            id_consulta = e.id_consulta
            consultas.push(new Consulta(e))
            i++
            consultas[i].addTratamento(new Tratamento(e))
           
        }else{
            consultas[i].addTratamento(new Tratamento(e))
        }
    })
    const prof = lista[i]
    prof.consultas = consultas
    return new Profissional(prof);
}

module.exports = {profissional};