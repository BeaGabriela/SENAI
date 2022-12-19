function carregar() {
    var assentoEscolhido = localStorage.getItem('assento')
    console.log(assentoEscolhido)

    var btnCompra = document.querySelector('#btnCompra')
    var nome = document.querySelector('#nome')
    var dataNascimento = document.querySelector('#dataNascimento')
    var cpf = document.querySelector('#cpf')
    var dataViagem = document.querySelector('#dataViagem')
    var horarioViagem = document.querySelector('#horarioViagem')
    var valorTotal = document.querySelector('#ValorTotal')
    var AssentoEscolhido = document.querySelector('#AssentoEscolhido')

    AssentoEscolhido.value = assentoEscolhido

    btnCompra.addEventListener('click', () => {
        var compraFeita = {
            'nome': nome.value,
            'dataNascimento': dataNascimento.value,
            'cpf': cpf.value,
            'dataViagem': dataViagem.value,
            'horarioViagem': horarioViagem.value,
            'valorTotal': valorTotal.value,
            'assento': assentoEscolhido
        }

        console.log(compraFeita)

        fetch('http://localhost:3000/onibus/passageiros', {
            "method": 'POST',
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(compraFeita)
        })
            .then(resp => resp.status )
            .then(data => {
                if (data == 201) {
                    alert('ok')
                    window.location.reload()
                } else {
                    alert('erro')
                }
            })

    })


}
function abrirPorta() {
    // var porta = document.querySelector('.porta')
    window.location.href = '../pagina2/index.html'
}

