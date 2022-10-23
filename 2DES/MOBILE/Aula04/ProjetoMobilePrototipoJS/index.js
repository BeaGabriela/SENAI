var vetor = [
    {
        'nome': 'Juscelino',
        'cargo': 'gerente'
    },

    {
        'nome': 'Isabele',
        'cargo': 'arquiteta'
    }
]

function mostrar() {
    vetor.forEach((data) => {
        var tr = document.querySelector('.col').cloneNode(true)
        tr.classList.remove("modal")

        tr.querySelector('#td1').innerHTML = data.nome
        tr.querySelector('#td2').innerHTML = data.cargo

        document.querySelector('tbody').appendChild(tr)
    })
}

function cadastrar() {
    var i1 = document.querySelector('#i1')
    var i2 = document.querySelector('#i2')
    var n = i1.value
    var c = i2.value

    var tr = document.querySelector('.col').cloneNode(true)
    tr.classList.remove("modal")

    tr.querySelector('#td1').innerHTML = n
    tr.querySelector('#td2').innerHTML = c

    document.querySelector('main').appendChild(tr)

   limpar()

}

function limpar(){
    var i1 = document.querySelector('#i1')
    var i2 = document.querySelector('#i2')

    i1.value = ''
    i2.value = ''

}