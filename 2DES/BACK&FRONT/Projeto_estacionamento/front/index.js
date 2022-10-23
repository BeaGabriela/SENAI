var tb = document.querySelector('tbody')
var l = document.querySelector('.mamae')
var b = document.querySelector('.botos')
b.classList.add('model')

var bC = document.querySelector('.botoesCadastro')
bC.classList.add('model')

var alte = document.querySelector('.alterarBotoes ')
alte.classList.add('model')

function listar() {
    l.classList.remove('model')
    b.classList.remove('model')
    document.querySelector('.limpar').innerHTML = ''
    var ListarEntradas = document.querySelector('#ListarEntradas')
    ListarEntradas.addEventListener('click', () => {
        fetch('http://localhost:5000/projeto_estacionamento/entrada')
            .then(res => { return res.json() })
            .then(cadastros => {
                cadastros.forEach(cad => {

                    var tabela = document.querySelector('.tabela')
                    tabela.classList.remove('model')
                    var geral = document.querySelector('.geral').cloneNode(true)
                    geral.classList.remove('model')

                    geral.querySelector('#id').innerHTML = cad.id
                    geral.querySelector('#vaga').innerHTML = cad.vaga
                    geral.querySelector('#placa').innerHTML = cad.placa
                    geral.querySelector('#hora_entrada').innerHTML = cad.hora_entrada
                    geral.querySelector('#datas_entrada').innerHTML = cad.datas_entrada
                    geral.querySelector('#tipo').innerHTML = cad.tipo
                    console.log('to aqui. Mas nao to indo')
                    tb.appendChild(geral)
                })
            })
    })

    var ListarSaidas = document.querySelector('#ListarSaidas')
    ListarSaidas.addEventListener('click', () => {
        fetch('http://localhost:5000/projeto_estacionamento/saida')
            .then(res => { return res.json() })
            .then(cadastros => {
                cadastros.forEach(cad => {
                    document.querySelector('.antigothead').innerHTML = ''
                    var tabela = document.querySelector('.tabela')
                    tabela.classList.remove('model')
                    tabela.cloneNode()

                    var table = document.createElement('table')
                    var thead = document.createElement('thead')
                    var tr = document.createElement('tr')
                    var th1 = document.createElement('th')
                    var th2 = document.createElement('th')
                    var th3 = document.createElement('th')

                    th1.innerHTML = 'Id'
                    th2.innerHTML = 'Data Saida'
                    th3.innerHTML = 'Hora Saida'

                    tr.appendChild(th1)
                    tr.appendChild(th2)
                    tr.appendChild(th3)

                    thead.appendChild(tr)

                    var tbody = document.createElement('tbody')
                    var tr1 = document.createElement('tr')
                    var td1 = document.createElement('td')
                    var td2 = document.createElement('td')
                    var td3 = document.createElement('td')

                    td1.innerHTML = cad.id
                    td2.innerHTML = cad.datas_saida
                    td3.innerHTML = cad.hora_saida

                    tr1.appendChild(td1)
                    tr1.appendChild(td2)
                    tr1.appendChild(td3)

                    tbody.appendChild(tr1)

                    table.appendChild(thead)
                    table.appendChild(tbody)

                    tabela.appendChild(table)

                })
            })
    })

    var ListarCarros = document.querySelector('#ListarCarros')
    ListarCarros.addEventListener('click', () => {
        fetch('http://localhost:5000/projeto_estacionamento/View_vizua')
            .then(res => { return res.json() })
            .then(cadastros => {
                cadastros.forEach(cad => {
                    document.querySelector('.antigothead').innerHTML = ''
                    var tabela = document.querySelector('.tabela')
                    tabela.classList.remove('model')
                    tabela.cloneNode()

                    var table = document.createElement('table')
                    var thead = document.createElement('thead')
                    var tr = document.createElement('tr')
                    var th1 = document.createElement('th')
                    var th2 = document.createElement('th')
                    var th3 = document.createElement('th')
                    var th4 = document.createElement('th')
                    var th5 = document.createElement('th')
                    var th6 = document.createElement('th')
                    var th7 = document.createElement('th')
                    var th8 = document.createElement('th')

                    th1.innerHTML = 'Id'
                    th2.innerHTML = 'Vaga'
                    th3.innerHTML = 'Placa'
                    th4.innerHTML = 'Hora_Entrada'
                    th5.innerHTML = 'Datas_Entrada'
                    th6.innerHTML = 'Datas_Saida'
                    th7.innerHTML = 'Hora_Saida'
                    th8.innerHTML = 'Valor'

                    tr.appendChild(th1)
                    tr.appendChild(th2)
                    tr.appendChild(th3)
                    tr.appendChild(th4)
                    tr.appendChild(th5)
                    tr.appendChild(th6)
                    tr.appendChild(th7)
                    tr.appendChild(th8)

                    thead.appendChild(tr)

                    var tbody = document.createElement('tbody')
                    var tr1 = document.createElement('tr')
                    var td1 = document.createElement('td')
                    var td2 = document.createElement('td')
                    var td3 = document.createElement('td')
                    var td4 = document.createElement('td')
                    var td5 = document.createElement('td')
                    var td6 = document.createElement('td')
                    var td7 = document.createElement('td')
                    var td8 = document.createElement('td')

                    td1.innerHTML = cad.id
                    td2.innerHTML = cad.vaga
                    td3.innerHTML = cad.placa
                    td4.innerHTML = cad.hora_entrada
                    td5.innerHTML = cad.datas_entrada
                    td6.innerHTML = cad.datas_saida
                    td7.innerHTML = cad.hora_saida
                    td8.innerHTML = cad.valor_total

                    tr1.appendChild(td1)
                    tr1.appendChild(td2)
                    tr1.appendChild(td3)
                    tr1.appendChild(td4)
                    tr1.appendChild(td5)
                    tr1.appendChild(td6)
                    tr1.appendChild(td7)
                    tr1.appendChild(td8)

                    tbody.appendChild(tr1)

                    table.appendChild(thead)
                    table.appendChild(tbody)

                    tabela.appendChild(table)

                })
            })
    })

}

function cadastrar() {
    l.classList.remove('model')
    bC.classList.remove('model')
    document.querySelector('.limpar').innerHTML = ''
    var cadastrarEntrada = document.querySelector('#cadastrarEntrada')
    cadastrarEntrada.addEventListener('click', () => {
        var nav = document.createElement('nav')

        var InputPlaca = document.createElement('input')
        InputPlaca.setAttribute('placeholder', 'placa')

        var InputVaga = document.createElement('input')
        InputVaga.setAttribute('placeholder', 'vaga')
    
        var InputTipo = document.createElement('input')
        InputTipo.setAttribute('placeholder', 'tipo')
    
        var btn = document.createElement('input')
        btn.setAttribute('type', 'button')
        btn.setAttribute('value', 'Cadastrar')
    
        nav.appendChild(InputPlaca)
        nav.appendChild(InputVaga)
        nav.appendChild(InputTipo)
        nav.appendChild(btn)

        document.querySelector('.mamae').appendChild(nav)
    
        btn.addEventListener('click', () => {
        let carro = {
            'vaga': InputVaga.value,        
            'placa': InputPlaca.value,
            'tipo': InputTipo.value
        };

        fetch('http://localhost:5000/projeto_estacionamento/entrada', {
            "method": 'POST',
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(carro)
        })
            .then(res => { return res.json() })
            .then(resp => {
                if (resp.vaga !== undefined) {
                    alert("Entrada de VEICULO Cadastrado Com Sucesso !");
                    window.location.reload();
                } else {
                    alert("Falha ao cadastrar Entrada de VEICULO");
                }
            })
           
})
    })
    var cadastrarSaida = document.querySelector('#cadastrarSaida')
    cadastrarSaida.addEventListener('click', () => {
        var nav = document.createElement('nav')
    
        var id = document.createElement('input')
        id.setAttribute('placeholder', 'id')

        var InputdATAS = document.createElement('input')
        InputdATAS.setAttribute('placeholder', 'data Saida')
    
        var btn = document.createElement('input')
        btn.setAttribute('type', 'button')
        btn.setAttribute('value', 'Cadastrar')
    
        nav.appendChild(id)
        nav.appendChild(InputdATAS)
        nav.appendChild(btn)
       

        document.querySelector('.mamae').appendChild(nav)
    
        btn.addEventListener('click', () => {

        let carro = {
            'id' : id.value,
            'datas_saida': InputdATAS.value
        };

        fetch('http://localhost:5000/projeto_estacionamento/saida', {
            "method": 'POST',
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(carro)
        })
            .then(res => { return res.json() })
            .then(resp => {
                if (resp.id !== undefined) {
                    alert("Saida de carro Cadastrado Com Sucesso !");
                    window.location.reload();
                } else {
                    alert("Falha ao cadastrar Saida de Carro");
                }
            })
           
})
    })
}

function alterar(){
    l.classList.remove('model')
    b.classList.remove('model')
    document.querySelector('.limpar').innerHTML = ''
    var alterarEntradas = document.querySelector('#alterarEntrada')
}




function limpar() {
    var l = document.querySelector('.mamae')
    l.classList.add('model')
}



