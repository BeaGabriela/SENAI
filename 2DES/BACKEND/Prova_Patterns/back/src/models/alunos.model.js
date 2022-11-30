class Alunos {
    aluno = []
    constructor(data){
        this.id_aluno = data.id_aluno
        this.nome = data.nome
        this.nascimento = data.nascimento
        if(data.aluno != undefined)
        data.aluno.forEach(e => {
            this.aluno.push(e)
        })
    }

    static readAll(){
        return 'SELECT * FROM alunos';
    }

    static readCursoAluno(id){
        return `SELECT * FROM V_cursos WHERE id_aluno = ${id}`;
    }

    static create(data){
        return `INSERT INTO alunos VALUES (default, '${data.nome}', '${data.nascimento}')`;
    }

    static update(data){
        return `UPDATE alunos SET nome = '${data.nome}', nascimento = '${data.nascimento}' WHERE id_aluno = '${data.id_aluno}'`;
    }

    static delete(data){
        return `DELETE FROM alunos WHERE id_aluno = '${data.id_aluno}'`
    }


}

module.exports = Alunos