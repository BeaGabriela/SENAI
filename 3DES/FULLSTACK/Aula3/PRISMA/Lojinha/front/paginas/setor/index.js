function carregar() {
    var inputNome = document.querySelector('#nomeProduto')
    var inputValor = document.querySelector('#valorProduto')
    var btnCadastrar = document.querySelector('#cadastrar')
    

    btnCadastrar.addEventListener('click', () => {

        const json = {
            "nome": inputNome.value,
            "comissao": Number(inputValor.value)
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        }

        fetch('http://localhost:3000/setor', options)
        .then(response => response.status)
        .then(resp => {
                if (resp === 201) {
                    window.location.reload()
                }
            })
    })

    fetch('http://localhost:3000/setor')
        .then(res => { return res.json() })
        .then(res => {
            res.forEach(s => {
                var jaCadastrados = document.querySelector('.jaCadastrados').cloneNode(true)
                jaCadastrados.classList.remove('model')

                jaCadastrados.querySelector('#nomeSetor').innerHTML =  s.nome
                jaCadastrados.querySelector('#comissao').innerHTML =  s.comissao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

                document.querySelector('.cadastrado').appendChild(jaCadastrados)
            })
        })

}