const Aluno = require('./alunos.model')
const Curso = require('./curso.models')

const AlunosId = (lista) => {
    let alunos = []
    let i = 0
    let id_alunos = lista[i].id_aluno
    alunos.push(new Curso(lista[i]))
    lista.forEach(e => {
        if(id_alunos  != e.id_aluno){
            id_alunos = e.id_aluno
            alunos.push(new Curso(e))
            i++
            alunos[i].addAlunos(new Aluno(e))
        }else{
            alunos[i].addAlunos(new Aluno(e))
        }
    })
   return lista[i]
    
}

module.exports = {
    AlunosId
}