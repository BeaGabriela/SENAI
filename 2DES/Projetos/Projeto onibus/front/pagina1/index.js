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
    var abrirModal = document.querySelector('.modalSucesso')
    var fecharModal = document.querySelector('#fecharModal')

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
            .then(resp => resp.status)
            .then(data => {
                if (data == 201) {
                    abrirModal.classList.remove('modal')

                } else {
                    alert('erro')
                }
            })

    })

    fecharModal.addEventListener('click', () => {
        abrirModal.classList.add('modal')
        window.location.reload()
    })


}
function abrirPorta() {
    window.location.href = '../pagina2/index.html'
}

