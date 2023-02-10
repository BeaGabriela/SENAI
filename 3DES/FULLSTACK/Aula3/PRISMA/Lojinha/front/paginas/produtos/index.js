function carregar() {
    var inputNome = document.querySelector('#nomeProduto')
    var inputValor = document.querySelector('#valorProduto')
    var setor = document.querySelector('.setores')
    var btn = document.querySelector('#buttonCadastrar')
    
    var listarProds = document.querySelector('.produtosListar')


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


    fetch('http://localhost:3000/produtos')
        .then(response => response.json())
        .then(response => {
            response.forEach(p => {
                var CloneProd = document.querySelector('.cloneProd').cloneNode(true)
                CloneProd.classList.remove('model')
                CloneProd.querySelector('#nomeProd').innerHTML = p.nomeProduto
                CloneProd.querySelector('#valorP').innerHTML = p.valorProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                CloneProd.querySelector('#setor').innerHTML = p.setores

                listarProds.appendChild(CloneProd)
                
            })
        })





}