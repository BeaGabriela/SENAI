
function ListarFunc() {
    var tabela = document.querySelector('.geral')
    var tbdyEntrada = document.querySelector('.tabelaEntrada')
    var tabelaGeral = document.querySelector('.tabela')
    fetch('http://localhost:3000/estacionamento/funcionarios')
        .then(res => { return res.json() })
        .then(esta => {
            esta.forEach(e => {
                tabelaGeral.classList.remove('model')
                tabela.classList.remove('model')
                
                var trTabela = tabela.cloneNode(true)
                trTabela.querySelector('#Login').innerHTML = e.login
                trTabela.querySelector('#password').innerHTML = '*****'
                trTabela.querySelector('#nome').innerHTML = e.nome

                tbdyEntrada.appendChild(trTabela)
                tabelaGeral.appendChild(tbdyEntrada)
            })
        })
}

function buscar() {
    var valor = document.querySelector('#valor')
    var v = valor.value
    var tabela = document.querySelector('.geral')
    var tbdyEntrada = document.querySelector('.tabelaEntrada')
    var tabelaGeral = document.querySelector('.tabela')
    tbdyEntrada.innerHTML = ''
    fetch('http://localhost:3000/estacionamento/funcionarios')
        .then(res => { return res.json() })
        .then(esta => {
            esta.forEach(e => {
                if(v == e.nome){
                tabelaGeral.classList.remove('model')
                tabela.classList.remove('model')
                
                var trTabela = tabela.cloneNode(true)
                trTabela.querySelector('#Login').innerHTML = e.login
                trTabela.querySelector('#password').innerHTML = '*****'
                trTabela.querySelector('#nome').innerHTML = e.nome

                tbdyEntrada.appendChild(trTabela)
                tabelaGeral.appendChild(tbdyEntrada)
                }
            })
        })
}

