var inputNome = document.querySelector('#nomeProduto')
var inputValor = document.querySelector('#valorProduto')
var setor = document.querySelector('.setores')
var vendedor = document.querySelector('.vendedor')
var btn = document.querySelector('#buttonCadastrar')
var produto = document.querySelector('.produto')
var quantidade = document.querySelector('#qtd')

function carregar() {
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


    fetch('http://localhost:3000/vendedor')
        .then(response => response.json())
        .then(response => {
            response.forEach(p => {
                var listar = document.querySelector('.listar').cloneNode(true)
                listar.classList.remove('model')
                listar.querySelector('#nome').innerHTML = p.nomeVendedor
                listar.querySelector('#valor').innerHTML = p.salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                listar.querySelector('#setor').innerHTML = p.setorCuida

                document.querySelector('.listando').appendChild(listar)

                vendedor.cloneNode(true)
                vendedor.classList.remove('model')
                vendedor.innerHTML += `<option value="${p.id_vendedor}">${p.nomeVendedor}</option>`

                document.querySelector('#getVendedor').appendChild(vendedor)
            })
        })


    fetch('http://localhost:3000/vendas')
        .then(response => response.json())
        .then(response => {
            response.forEach(p => {
                var listarVendas = document.querySelector('.listarVendas').cloneNode(true)
                let lista = listarVendas.querySelector('.detalhes')
                let item = listarVendas.querySelector('#detalhe')
                listarVendas.classList.remove('model')
                listarVendas.querySelector('#data').innerHTML = p.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                listarVendas.querySelector('#id_vendedor').innerHTML = p.id_vendedores

                p.detalhes.forEach(detalhes => {
                    let clone = item.cloneNode(true)
                    clone.classList.remove('model')

                    clone.querySelector('#id_produto').innerHTML = detalhes.id_produto
                    clone.querySelector('#venda').innerHTML = detalhes.id_venda
                    clone.querySelector('#qtd2').innerHTML = detalhes.quantidade

                    lista.appendChild(clone)
                })


                listarVendas.appendChild(lista)
                document.querySelector('.listandoVendas').appendChild(listarVendas)

            })
        })


    fetch('http://localhost:3000/produtos')
        .then(response => response.json())
        .then(response => {
            response.forEach(p => {
                produto.cloneNode(true)
                produto.classList.remove('model')
                produto.innerHTML += `<option value="${p.id_produto}">${p.nomeProduto}</option>`

                document.querySelector('#getProduto').appendChild(produto)

            })
        })


    btn.addEventListener('click', () => {
        const json = {
            "nomeVendedor": inputNome.value,
            "salario": Number(inputValor.value),
            "setorCuida": Number(setor.value)
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        };

        fetch('http://localhost:3000/vendedor', options)
            .then(response => response.status)
            .then(resp => {
                if (resp === 201) {
                    window.location.reload()
                }
            })
    })
}

function cadastrarVenda() {
    var abrirModal = document.querySelector('.abrirModal')
    var cadastrar = document.querySelector('#cadastrarVenda')
    var cancelar = document.querySelector('#cancelar')
    abrirModal.classList.remove('model')

    cadastrar.addEventListener('click', () => {
        const json = {
            "id_vendedores": Number(vendedor.value),
            "detalhes": [
                {
                    "id_produto": Number(produto.value),
                    "quantidade": Number(quantidade.value)
                },
            ]
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        };

        fetch('http://localhost:3000/vendas', options)
        .then(response => response.status)
        .then(resp => {
            if (resp === 201) {
                window.location.reload()
            }
        })
    })

    cancelar.addEventListener('click', () => {
        var abrirModal = document.querySelector('.abrirModal')
        abrirModal.classList.add('model')
    })
}


function fecharModal() {
    var abrirModal = document.querySelector('.abrirModal')
    abrirModal.classList.add('model')
}