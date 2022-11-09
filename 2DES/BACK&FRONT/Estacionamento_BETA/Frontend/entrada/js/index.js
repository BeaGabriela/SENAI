
function ListarEntrada() {
    var tabela = document.querySelector('.geral')
    var tbdyEntrada = document.querySelector('.tabelaEntrada')
    var tabelaGeral = document.querySelector('.tabela')
    fetch('http://localhost:3000/estacionamento/entrada')
        .then(res => { return res.json() })
        .then(esta => {
            esta.forEach(e => {
                tabelaGeral.classList.remove('model')
                tabela.classList.remove('model')
                
                var trTabela = tabela.cloneNode(true)
                trTabela.querySelector('#id').innerHTML = e.id
                trTabela.querySelector('#vaga').innerHTML = e.vaga
                trTabela.querySelector('#placa').innerHTML = e.placa
                trTabela.querySelector('#hora_entrada').innerHTML = e.hora_entrada
                var data = e.datas_entrada
                trTabela.querySelector('#datas_entrada').innerHTML = data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                trTabela.querySelector('#hora_saida').innerHTML = e.hora_saida
                var data1 = e.datas_saida
                trTabela.querySelector('#datas_saida').innerHTML = data1.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                trTabela.querySelector('#tipo').innerHTML = e.tipo

                tbdyEntrada.appendChild(trTabela)
                tabelaGeral.appendChild(tbdyEntrada)
            })
        })
}

function buscar() { 
    var valor = document.querySelector('#valor')
    var v = valor.value

    fetch('http://localhost:3000/estacionamento/entrada/')
        .then(res => { return res.json() })
        .then(esta => {
            esta.forEach(e => {
    
    var tabela = document.querySelector('.geral')
    var tbdyEntrada = document.querySelector('.tabelaEntrada')
    var tabelaGeral = document.querySelector('.tabela')
    var thead = document.querySelector('.antigothead')
    tbdyEntrada.innerHTML = ''
   
   
   
    
               if(v == e.id || v.includes(e.vaga)){
                    tabelaGeral.classList.remove('model')
                    tabela.classList.remove('model')
                    var trTabela = tabela.cloneNode(true)
                    trTabela.querySelector('#id').innerHTML = e.id
                    trTabela.querySelector('#vaga').innerHTML = e.vaga
                    trTabela.querySelector('#placa').innerHTML = e.placa
                    trTabela.querySelector('#hora_entrada').innerHTML = e.hora_entrada
                    var data = e.datas_entrada
                    trTabela.querySelector('#datas_entrada').innerHTML = data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    trTabela.querySelector('#hora_saida').innerHTML = e.hora_saida
                    var data1 = e.datas_saida
                    trTabela.querySelector('#datas_saida').innerHTML = data1.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    trTabela.querySelector('#tipo').innerHTML = e.tipo

                    tbdyEntrada.appendChild(trTabela)
                    tabelaGeral.appendChild(tbdyEntrada)
               
               }
                       
            })
        })
}