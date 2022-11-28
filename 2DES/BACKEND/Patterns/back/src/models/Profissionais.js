class Profisionais {

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

    static read (id){
        return `select * from Vw_Tabelas WHERE id_profissionais = ${id}`
    
    }
   
}
