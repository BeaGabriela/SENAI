
function carregar() {
    var usuario = JSON.parse(localStorage.getItem('user'))
    console.log(usuario.token)


    //Listar motoristas
    var listarMotorista = document.querySelector('.listarMotoristas')
    listarMotorista.classList.remove('model')

    fetch('http://localhost:3000/motorista/')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.forEach(f => {
                var listarClone = document.querySelector('.cloneModalMotoristas').cloneNode(true)
                listarClone.classList.remove('model')

                listarClone.querySelector('#id_Motorista').innerHTML = f.id
                listarClone.querySelector('#nomeMotorista').innerHTML = f.nome

                listarMotorista.appendChild(listarClone)
            })
        })


    //Manutenções
    var listarManutencoes = document.querySelector('.ListarManutencoes');
    listarManutencoes.classList.remove('model')
    fetch('http://localhost:3000/manutencao')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.forEach(manutencao => {
                var listarManutencao = document.querySelector('.listarManutencao').cloneNode(true)
                listarManutencao.classList.remove('model')

                listarManutencao.querySelector('#Id_manutencao').innerHTML = manutencao.id
                listarManutencao.querySelector('#veiculoM').innerHTML = manutencao.veiculo
                listarManutencao.querySelector('#dataInicio').innerHTML = manutencao.data_inicio.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                listarManutencao.querySelector('#valor').innerHTML = manutencao.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                listarManutencao.querySelector('#descricao').innerHTML = manutencao.descricao
                listarManutencao.querySelector('#data_fim').innerHTML = manutencao.data_fim.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]


                listarManutencoes.appendChild(listarManutencao)
            })
        })


    //Operações
    var ListarOperacoes = document.querySelector('.ListarOperacoes')
    ListarOperacoes.classList.remove('model')


    fetch('http://localhost:3000/operacoes')
        .then(response => response.json())
        .then(response => {
            response.forEach(operacoes => {
                var listarOperacoes = document.querySelector('.listarOperacoes').cloneNode(true)
                listarOperacoes.classList.remove('model')

                listarOperacoes.querySelector('#Id_operacoes').innerHTML = operacoes.id
                listarOperacoes.querySelector('#veiculoO').innerHTML = operacoes.veiculo
                listarOperacoes.querySelector('#MotoristaOper').innerHTML = operacoes.motorista
                listarOperacoes.querySelector('#data_Inicio').innerHTML = operacoes.data_saida.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                listarOperacoes.querySelector('#descricaoOp').innerHTML = operacoes.descricao
                listarOperacoes.querySelector('#data_retorno').innerHTML = operacoes.data_retorno.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]

                ListarOperacoes.appendChild(listarOperacoes)

            })
        })


    //Veiculos
    var veiculo = document.querySelector('.ListarVeiculos')
    veiculo.classList.remove('model')

    //Listar
    fetch('http://localhost:3000/veiculos')
        .then(response => response.json())
        .then(response => {
            response.forEach(v => {
                var veiculosCLone = document.querySelector('.listarVeiculos').cloneNode(true)
                veiculosCLone.classList.remove('model')
                veiculosCLone.querySelector('#Id_Veiculos').innerHTML = v.id
                veiculosCLone.querySelector('#placa').innerHTML = v.placa
                veiculosCLone.querySelector('#tipoVeiculo').innerHTML = v.tipo


                veiculo.appendChild(veiculosCLone)
            })
        })

    //definindo filtro
    var filtroVeiculos = document.querySelector('#definindoFiltro')
    filtroVeiculos.addEventListener('click', () => {

    })


}

