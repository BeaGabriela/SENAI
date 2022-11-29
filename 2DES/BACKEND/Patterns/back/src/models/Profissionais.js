class Profissionais {

    consultas = []

    constructor(data) {
        this.id_profissionais = data.id_profissionais;
        this.nome = data.nome
        this.especialidade = data.especialidade
        if (data.consultas != undefined)
            data.consultas.forEach(e => {
                this.consultas.push(e)
            })
    }
    static  readProfissionais = () =>  {
        return 'Select * from profissionais';
    };
    static Profisionais = (model) => {
        return `SELECT * from  View_Tabelas WHERE id_profissionais LIKE '%${model.id_profissionais}%'`;
    }
    
}

module.exports = {
    Profissionais
}
