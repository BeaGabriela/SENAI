var tb = document.querySelector('tbody')
var l = document.querySelector('.mamae')
var b = document.querySelector('.botos')
b.classList.add('model')

var corpo = document.querySelector('tbody')
var bC = document.querySelector('.botoesCadastro')
bC.classList.add('model')

var alte = document.querySelector('.alterarBotoes ')


function listar() {
    l.classList.remove('model')
    b.classList.remove('model')
    document.querySelector('.limpar').innerHTML = ''
    var ListarEntradas = document.querySelector('#ListarEntradas')
    ListarEntradas.addEventListener('click', () => {
        ListarEntradas.disabled= true;
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
                    var data = cad.datas_entrada
                    geral.querySelector('#datas_entrada').innerHTML = data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    geral.querySelector('#tipo').innerHTML = cad.tipo
                    console.log('to aqui. Mas nao to indo')
                    tb.appendChild(geral)
                })
            })
    })

    var table = document.createElement('table')
    var thead = document.createElement('thead')
    var tr = document.createElement('tr')
    var th1 = document.createElement('th')
    var th2 = document.createElement('th')
    var th3 = document.createElement('th')

    var ListarSaidas = document.querySelector('#ListarSaidas')
    ListarSaidas.addEventListener('click', () => {
        ListarSaidas.disabled= true;
        fetch('http://localhost:5000/projeto_estacionamento/saida')
            .then(res => { return res.json() })
            .then(cadastros => {
                cadastros.forEach(cad => {
                    
                     document.querySelector('.antigothead').innerHTML = ''
                    var tabela = document.querySelector('.tabela')
                    tabela.classList.remove('model')
                    var nTabela = tabela.cloneNode()

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
                    var data1 = cad.datas_saida
                    td1.innerHTML = cad.id
                    td2.innerHTML = data1.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    td3.innerHTML = cad.hora_saida

                    tr1.appendChild(td1)
                    tr1.appendChild(td2)
                    tr1.appendChild(td3)

                    tbody.appendChild(tr1)

                    table.appendChild(thead)
                    table.appendChild(tbody)

                    nTabela.appendChild(table)

                    document.querySelector('.divizinha').appendChild(nTabela)

                })
            })
    })

    var table1 = document.createElement('table')
    var thead1 = document.createElement('thead')
    var tr1 = document.createElement('tr')
    var th10 = document.createElement('th')
    var th20 = document.createElement('th')
    var th30 = document.createElement('th')
    var th40 = document.createElement('th')
    var th50 = document.createElement('th')
    var th60 = document.createElement('th')
    var th70 = document.createElement('th')
    var th80 = document.createElement('th')

    
    var ListarCarros = document.querySelector('#ListarCarros')
    ListarCarros.addEventListener('click', () => {
        ListarCarros.disabled= true;
        fetch('http://localhost:5000/projeto_estacionamento/View_vizua')
            .then(res => {return res.json() })
            .then(cadastros => {
                cadastros.forEach(cad => {
                     document.querySelector('.antigothead').innerHTML = ''
                    var tabela = document.querySelector('.tabela')
                    tabela.classList.remove('model')
                    var nTabela = tabela.cloneNode()

                   
                    th10.innerHTML = 'Id'
                    th20.innerHTML = 'Vaga'
                    th30.innerHTML = 'Placa'
                    th40.innerHTML = 'Hora_Entrada'
                    th50.innerHTML = 'Datas_Entrada'
                    th60.innerHTML = 'Datas_Saida'
                    th70.innerHTML = 'Hora_Saida'
                    th80.innerHTML = 'Valor'

                    tr1.appendChild(th10)
                    tr1.appendChild(th20)
                    tr1.appendChild(th30)
                    tr1.appendChild(th40)
                    tr1.appendChild(th50)
                    tr1.appendChild(th60)
                    tr1.appendChild(th70)
                    tr1.appendChild(th80)

                    thead1.appendChild(tr1)

                    var tbody = document.createElement('tbody')
                    var tr2 = document.createElement('tr')
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
                    var data1 = cad.datas_entrada
                    td5.innerHTML = data1.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    var data2 =  cad.datas_saida
                    td6.innerHTML = data2.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    td7.innerHTML = cad.hora_saida
                    td8.innerHTML = cad.estacionar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                
                    tr2.appendChild(td1)
                    tr2.appendChild(td2)
                    tr2.appendChild(td3)
                    tr2.appendChild(td4)
                    tr2.appendChild(td5)
                    tr2.appendChild(td6)
                    tr2.appendChild(td7)
                    tr2.appendChild(td8)

                    tbody.appendChild(tr2)

                    table1.appendChild(thead1)
                    table1.appendChild(tbody)

                    nTabela.appendChild(table1)

                    document.querySelector('.divizinha').appendChild(nTabela)

                })
            })
    })

}

function cadastrar() {
    l.classList.remove('model')
    bC.classList.remove('model')
    // document.querySelector('.limpar').innerHTML = ''
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



