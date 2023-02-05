function carregar() {
    var inputNome = document.querySelector('#nomeProduto')
    var inputValor = document.querySelector('#valorProduto')
    var btnCadastrar = document.querySelector('#cadastrar')

    btnCadastrar.addEventListener('click', () => {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"nome": ${inputNome.value}, "comissao":${inputValor.value}}`
        }

        fetch('http://localhost:3000/setor', options)
            .then(res => {
                if (res === 201) {
                    console.log('ok')
                }
            })
    })


}