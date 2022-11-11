
function ListarEntrada() {
    var tabela = document.querySelector('.geral')
    var tbdyEntrada = document.querySelector('.tabelaEntrada')
    var tabelaGeral = document.querySelector('.tabela')
    fetch('http://localhost:3000/estacionamento/View_entradas')
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
                if(e.vaga == 0 || e.hora_saida == null || e.hora_saida == 'ABERTO'|| e.hora_saida == '00:00:00'){
                    trTabela.querySelector('#vaga').style.color = 'red'
                }else{
                    trTabela.querySelector('#vaga').style.color = 'green'
                }

                tbdyEntrada.appendChild(trTabela)
                tabelaGeral.appendChild(tbdyEntrada)

                var c = document.querySelector('.cards').cloneNode(true)
                if(e.vaga_ocupada == 0 || e.hora_saida == null || e.hora_saida == 'ABERTO'|| e.hora_saida == '00:00:00'){
                    c.querySelector('#vagas').style.backgroundColor = 'red'
                    c.querySelector('#con').innerHTML = e.vaga
                    c.querySelector('#con').style.color= 'black'
                   
                }else{
                    c.querySelector('#vagas').style.backgroundColor = 'green'
                    c.querySelector('#con').innerHTML = e.vaga
                    c.querySelector('#con').style.color = 'black'
                }

                

                document.querySelector('.v').appendChild(c)
            })
        })
}

function buscar() {
    var valor = document.querySelector('#valor')
    var v = valor.value

    fetch('http://localhost:3000/estacionamento/entrada/' + v)
        .then(res => { return res.json() })
        .then(esta => {
            esta.forEach(e => {

                var tabela = document.querySelector('.geral')
                var tbdyEntrada = document.querySelector('.tabelaEntrada')
                var tabelaGeral = document.querySelector('.tabela')
                var thead = document.querySelector('.antigothead')
                tbdyEntrada.innerHTML = ''
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