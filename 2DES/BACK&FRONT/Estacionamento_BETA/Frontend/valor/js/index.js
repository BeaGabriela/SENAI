

function ListarValor(){
    var t1 = document.querySelector('.tabelinha')
    var tbdyEntrada = document.querySelector('.tabelaValor')
    var tabelaGeral =  document.querySelector('.tabela1')

        fetch('http://localhost:3000/estacionamento/valor')
    .then(res => { return res.json() })
    .then(valor => {
        valor.forEach(v => {
            tabelaGeral.classList.remove('model')
            t1.classList.remove('model')
            var val = t1.cloneNode(true)
        val.querySelector('#id').innerHTML = v.id 
        val.querySelector('#tempo').innerHTML = v.tempo
        val.querySelector('#valor').innerHTML = v.valor_total
       tbdyEntrada.appendChild(val)
       tabelaGeral.appendChild(tbdyEntrada)
        })
    })
}
