

function ListarValor() {
    var t1 = document.querySelector('.tabelinha')
    var tbdyEntrada = document.querySelector('.tabelaValor')
    var tabelaGeral = document.querySelector('.tabela1')

    fetch('http://localhost:3000/estacionamento/valor')
        .then(res => { return res.json() })
        .then(valor => {
            valor.forEach(v => {
                tabelaGeral.classList.remove('model')
                var val = t1.cloneNode(true)
                val.classList.remove('model')
                if (v.tempo > 0 && v.valor_total > 0) {
                    val.querySelector('#id').innerHTML = v.id
                    val.querySelector('#tempo').innerHTML = v.tempo
                    val.querySelector('#valor').innerHTML = v.valor_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    tbdyEntrada.appendChild(val)
                    tabelaGeral.appendChild(tbdyEntrada)
                } else {
                   console.log('s')
                }
            })
        })
}

function buscar() {
    var t1 = document.querySelector('.tabelinha')
    var tbdyEntrada = document.querySelector('.tabelaValor')
    var tabelaGeral = document.querySelector('.tabela1')
    var valor = document.querySelector('#valor')
    var va = valor.value
    tbdyEntrada.innerHTML = ''
    fetch('http://localhost:3000/estacionamento/valor')
        .then(res => { return res.json() })
        .then(valor => {
            valor.forEach(v => {
                if (va == v.id) {
                    tabelaGeral.classList.remove('model')
                    t1.classList.remove('model')
                    var val = t1.cloneNode(true)
                    val.querySelector('#id').innerHTML = v.id
                    val.querySelector('#tempo').innerHTML = v.tempo
                    val.querySelector('#valor').innerHTML = v.valor_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    tbdyEntrada.appendChild(val)
                    tabelaGeral.appendChild(tbdyEntrada)
                }
            })
        })

}