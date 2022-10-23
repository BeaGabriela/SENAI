var th = document.createElement('th') //Linha principal
th.innerHTML = 'Nome'
var th1 = document.createElement('th')//Linha principal
th1.innerHTML = 'Cargo'
var th2 = document.createElement('th') //Linha principal
th2.innerHTML = 'Salário'


var nome = document.getElementById('nome')
var cargo = document.getElementById('cargo')
var salario = document.getElementById('salario')

function cadastrar() {
    var thead = document.querySelector('thead')
    var tbody = document.querySelector('tbody')

    var n = nome.value
    var c = cargo.value
    var s = Number(salario.value)

    if (n.length == 0 || c.length == 0 || s.length == 0) {
        alert('Você esqueceu de preencher os campos')
    } else if (s != Number(s)) {
        alert('Por favor, informe o campo Salário com números validos')
    } else {


        var tr = document.createElement('tr') //Coluna1

<<<<<<< HEAD
th0.innerHTML = 'Nome'
th1.innerHTML= 'Cargo'
th2.innerHTML = 'Salário'

tr.appendChild(th0)
tr.appendChild(th1)
tr.appendChild(th2)

var td0 = document.createElement('td')
td0.innerHTML =  n
var td1 = document.createElement('td')
td1.innerHTML = c
var td2 = document.createElement('td')
td2.innerHTML = s
  
=======
        tr.appendChild(th)
        tr.appendChild(th1)
        tr.appendChild(th2)
        thead.appendChild(tr)

>>>>>>> 267e35be77bbee0dd0cced2015d21f9f7bddd0ae

        var tr1 = document.createElement('tr') //Coluna2

        var td0 = document.createElement('td') //Linha 1
        td0.innerHTML = n


        var td1 = document.createElement('td') //Linha 2
        td1.innerHTML = c

        var td2 = document.createElement('td')  //Linha 3
        td2.innerHTML = s.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })


        tr1.appendChild(td0)
        tr1.appendChild(td1)
        tr1.appendChild(td2)
        tbody.appendChild(tr1)
        document.querySelector('table').style.background = 'salmon'

    }
    nome.value = ''
    cargo.value = ''
    salario.value = ''

    nome.value.focus()
    cargo.value.focus()
    salario.value.focus()

}