function carregar() {
    var inputNome = document.querySelector('#nomeProduto')
    var inputValor = document.querySelector('#valorProduto')
    var setor = document.querySelector('.setores')
    var btn = document.querySelector('#buttonCadastrar')


    fetch('http://localhost:3000/setor')
        .then(response => response.json())
        .then(response => {
            response.forEach(p => {
                setor.cloneNode(true)
                setor.classList.remove('model')
                setor.innerHTML += `<option value="${p.id_setor}">${p.nome}</option>`

                document.querySelector('#setorNew').appendChild(setor)

            })
        })
    btn.addEventListener('click', () => {
        const json = {
            "nomeProduto": inputNome.value,
            "valorProduto": Number(inputValor.value),
            "setores": Number(setor.value)
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        };

        fetch('http://localhost:3000/produtos', options)
            .then(response => response.status)
            .then(resp => {
                if (resp === 201) {
                     window.location.reload()
                }
            })
            


    })





}