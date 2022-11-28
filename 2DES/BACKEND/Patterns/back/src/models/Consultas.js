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
}