
var bemVindo = document.querySelector('#bemVindo')
var infos = document.querySelector('#info')

var data = new Date()
var dia = data.getDate()
var mes = data.getMonth() + 1
var ano = data.getFullYear()
var hora = data.getHours()
var minutos = data.getMinutes()
var dataCompleta = `${ano}-0${mes}-${dia}  ${hora}:${minutos}`

var usuario = JSON.parse(localStorage.getItem('user'))


function carregar() {
    bemVindo.innerHTML = '  ' + usuario.nome
    bemVindo.style.color = '#000'
    Manutencoes()
    Operacoes()

    var textSaida = document.querySelector('#logoutt')
    var textoSair = document.querySelector('.textSair')
    textSaida.addEventListener('mouseover', () => {
        textoSair.classList.remove('model')
        textoSair.style.margin = '2px 0vw 0vw 0.7vw'
    })

    textSaida.addEventListener('mouseout', () => {
        textoSair.classList.add('model')
    })
    
}

function Manutencoes() {
    var listarManutencoes = document.querySelector('.ListarManutencoes');
    // listarManutencoes.classList.remove('model')
   

    var filtroManutencao = document.querySelector('#filtroManutencao')
    fetchManutencoes('')
    filtroManutencao.addEventListener('change', () => {
        if (filtroManutencao.value == 1) {
            listarManutencoes.innerHTML = `<div class="listarManutencao model">
            <label>Id:</label>
            <p id="Id_manutencao"></p>
            <label>Veiculo:</label>
            <p id="veiculoM"></p>
            <label>Data inicio</label>
            <p id="dataInicio"></p>
            <label>Valor:</label>
            <p id="valor"></p>
            <label>Descricao</label>
            <p id="descricao"></p>
            <label>Data fim:</label>
            <p id="data_fim"></p>
        </div> `
            valorFiltro = 1
            fetchManutencoes(1)
        } else if (filtroManutencao.value == 0) {
            listarManutencoes.innerHTML = `  <div class="listarManutencao model">
            <label>Id:</label>
            <p id="Id_manutencao"></p>
            <label>Veiculo:</label>
            <p id="veiculoM"></p>
            <label>Data inicio</label>
            <p id="dataInicio"></p>
            <label>Valor:</label>
            <p id="valor"></p>
            <label>Descricao</label>
            <p id="descricao"></p>
            <label>Data fim:</label>
            <p id="data_fim"></p>
        </div>`
            valorFiltro = 0
            fetchManutencoes(0)
        } else if (filtroManutencao.value == 3) {
            listarManutencoes.innerHTML = `  <div class="listarManutencao model">
            <label>Id:</label>
            <p id="Id_manutencao"></p>
            <label>Veiculo:</label>
            <p id="veiculoM"></p>
            <label>Data inicio</label>
            <p id="dataInicio"></p>
            <label>Valor:</label>
            <p id="valor"></p>
            <label>Descricao</label>
            <p id="descricao"></p>
            <label>Data fim:</label>
            <p id="data_fim"></p>
        </div>`
            fetchManutencoes('')
        }

    })

    
}

function fetchManutencoes(manutencao) {
    var listarManutencoes = document.querySelector('.ListarManutencoes');
    fetch(`http://localhost:3000/manutencao/${manutencao}`)
        .then(response => response.json())
        .then(response => {
            response.forEach(manutencao => {
                if (manutencao.data_fim == null || manutencao.data_fim == '1970-01-01T00:00:00.000Z') {
                    var listarManutencao = document.querySelector('.listarManutencao').cloneNode(true)
                    listarManutencao.classList.remove('model')
                    listarManutencao.querySelector('#Id_manutencao').innerHTML = manutencao.id
                    listarManutencao.querySelector('#veiculoM').innerHTML = manutencao.veiculo
                    listarManutencao.querySelector('#dataInicio').innerHTML = manutencao.data_inicio.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    listarManutencao.querySelector('#valor').innerHTML = manutencao.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    listarManutencao.querySelector('#descricao').innerHTML = manutencao.descricao
                    listarManutencao.querySelector('#data_fim').innerHTML = manutencao.data_fim

                   
                    listarManutencoes.appendChild(listarManutencao)

                } else {
                    var listarManutencao = document.querySelector('.listarManutencao').cloneNode(true)
                    listarManutencao.classList.remove('model')
                    listarManutencao.style.border = '1px solid #a9a9a9'
                    listarManutencao.querySelector('#Id_manutencao').innerHTML = manutencao.id
                    listarManutencao.querySelector('#veiculoM').innerHTML = manutencao.veiculo
                    listarManutencao.querySelector('#dataInicio').innerHTML = manutencao.data_inicio.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    listarManutencao.querySelector('#valor').innerHTML = manutencao.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    listarManutencao.querySelector('#descricao').innerHTML = manutencao.descricao
                    listarManutencao.querySelector('#data_fim').innerHTML = manutencao.data_fim.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]

                    
                    listarManutencoes.appendChild(listarManutencao)
                }
            })
        })
}

function Operacoes() {
    var ListarOperacoes = document.querySelector('.ListarOperacoes')
    ListarOperacoes.classList.remove('model')

    var filtroOperacao = document.querySelector('#filtroOperacao')
    fetchOperacao('')
    filtroOperacao.addEventListener('change', () => {
        if (filtroOperacao.value == 1) {
            ListarOperacoes.innerHTML = `<div class="listarOperacoes model">
            <label>Id:</label>
            <p id="Id_operacoes"></p>
            <label>Veiculo:</label>
            <p id="veiculoO"></p>
            <label>Motorista:</label>
            <p id="MotoristaOper"></p>
            <label>Data inicio</label>
            <p id="data_Inicio"></p>
            <label>Descricao</label>
            <p id="descricaoOp"></p>
            <label>Data Retorno:</label>
            <p id="data_retorno"></p>
        </div> `
            valorFiltro = 1
            fetchOperacao(1)
        } else if (filtroOperacao.value == 0) {
            ListarOperacoes.innerHTML = `<div class="listarOperacoes model">
            <label>Id:</label>
            <p id="Id_operacoes"></p>
            <label>Veiculo:</label>
            <p id="veiculoO"></p>
            <label>Motorista:</label>
            <p id="MotoristaOper"></p>
            <label>Data inicio</label>
            <p id="data_Inicio"></p>
            <label>Descricao</label>
            <p id="descricaoOp"></p>
            <label>Data Retorno:</label>
            <p id="data_retorno"></p>
        </div>`
            valorFiltro = 0
            fetchOperacao(0)
        } else if (filtroOperacao.value == 3) {
            ListarOperacoes.innerHTML = `<div class="listarOperacoes model">
            <label>Id:</label>
            <p id="Id_operacoes"></p>
            <label>Veiculo:</label>
            <p id="veiculoO"></p>
            <label>Motorista:</label>
            <p id="MotoristaOper"></p>
            <label>Data inicio</label>
            <p id="data_Inicio"></p>
            <label>Descricao</label>
            <p id="descricaoOp"></p>
            <label>Data Retorno:</label>
            <p id="data_retorno"></p>
        </div>`
            fetchOperacao('')
        }

    })  
}

function fetchOperacao(operacao) {
    var ListarOperacoes = document.querySelector('.ListarOperacoes')
    ListarOperacoes.classList.remove('model')

    fetch(`http://localhost:3000/operacoes/${operacao}`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.forEach(operacoes => {
                if (operacoes.data_retorno == null) {
                    var listarOperacoes = document.querySelector('.listarOperacoes').cloneNode(true)
                    listarOperacoes.classList.remove('model')

                    listarOperacoes.querySelector('#Id_operacoes').innerHTML = operacoes.id
                    listarOperacoes.querySelector('#veiculoO').innerHTML = operacoes.veiculo
                    listarOperacoes.querySelector('#MotoristaOper').innerHTML = operacoes.motorista
                    listarOperacoes.querySelector('#data_Inicio').innerHTML = operacoes.data_saida.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    listarOperacoes.querySelector('#descricaoOp').innerHTML = operacoes.descricao
                    listarOperacoes.querySelector('#data_retorno').innerHTML = operacoes.data_retorno


                    ListarOperacoes.appendChild(listarOperacoes)
                } else {
                    var listarOperacoes = document.querySelector('.listarOperacoes').cloneNode(true)
                    listarOperacoes.classList.remove('model')
                    listarOperacoes.style.border = '1px solid #a9a9a9'

                    listarOperacoes.querySelector('#Id_operacoes').innerHTML = operacoes.id
                    listarOperacoes.querySelector('#veiculoO').innerHTML = operacoes.veiculo
                    listarOperacoes.querySelector('#MotoristaOper').innerHTML = operacoes.motorista
                    listarOperacoes.querySelector('#data_Inicio').innerHTML = operacoes.data_saida.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    listarOperacoes.querySelector('#descricaoOp').innerHTML = operacoes.descricao
                    listarOperacoes.querySelector('#data_retorno').innerHTML = operacoes.data_retorno.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]

                   
                    
                    ListarOperacoes.appendChild(listarOperacoes)
                }


            })
        })
}

function FecharmodalManutencao() {
      var cadastrarManutencao = document.querySelector('.cadastrarManutencao')
     cadastrarManutencao.classList.add('model')
     var listarManutencoes = document.querySelector('.ListarManutencoes');
    listarManutencoes.classList.remove('model')
}

function fecharModalOperacao() {
      var cadastrarOperacao = document.querySelector('.cadastrarOperacao')
     cadastrarOperacao.classList.add('model')
     var listarOperacoes = document.querySelector('.ListarOperacoes');
    listarOperacoes.classList.remove('model')
}



function voltarAnterior() {
    window.history.back()
}

function logout() {
    window.localStorage.removeItem('usuario')
    window.location.href = '../LOGIN/login.html'
}







