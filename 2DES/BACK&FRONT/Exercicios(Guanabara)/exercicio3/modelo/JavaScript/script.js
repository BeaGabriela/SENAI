function clicar() {
    var i = document.getElementById('inicio')
    var f = document.getElementById('fim')
    var int = document.getElementById('intervalo')
    var res = document.getElementById('res')

    if (i.value.length == 0 || f.value.length == 0 || int.value.length == 0) {
        alert('A caixa está vazia! Repasse seus passos e modifique o número! ')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: '
        var inicio = Number.parseInt(i.value)
        var fim = Number.parseInt(f.value)
        var intervalo = Number.parseInt(int.value)
        if(intervalo == 0){
            alert('Passo Invalido!')
            intervalo =1
    }
    if (inicio < fim) {
        //Contagem crescente
        for (var c = inicio; c <= fim; c += intervalo) {
            res.innerHTML += c + " " + '&#x1f449' //Ou você pode usar \u{1F449}, mas só funciona entre crazes.
        }
    } else {
        //contagem decrescente
        for (var c = inicio; c >= fim; c -= intervalo) {
            res.innerHTML +=  c + " " + '&#x1f449'
        }
    }
    res.innerHTML += `\u{1F3C1}`


}
}


// //     var inicio = 2
// //     var fim = 6
//     var intervalo = 2
// for(var i = inicio; i <= fim; i+=intervalo){
//     console.log(i)
// }





