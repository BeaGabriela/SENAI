class Curso{
    c = []
    constructor(data){
        this.id_curso = data.id_curso
        this.curso = data.curso
        this.duracao = data.duracao
        if(data.c != undefined)
        data.c.forEach(e => {
            this.c.push(e)
        })
    }

    addAlunos(cr){
        this.c.push(cr)
    }

    static readAll(){
        return 'SELECT * FROM cursos'
    }

}

module.exports = Curso