const listarProdutos = document.querySelector("#lista-produtos")
const linhaModelo = document.querySelector('.linhaModelo');
const modalExcluir = document.querySelector('.excluir')
const modalEditar = document.querySelector('.editar');

const inputCodigo = document.querySelector('#codigo')
const inputNome = document.querySelector('#nome')
const inputQtd = document.querySelector('#quantidade')
const inputValor = document.querySelector('#valor')

fetch('http://localhost:5000/produto')
    .then(res => { return res.json() })
    .then(p => {
        p.forEach(produtos => {
            let linha = linhaModelo.cloneNode(true)
            linha.classList.remove('model')

            let colunas = linha.querySelectorAll('td')
            colunas[0].innerHTML = produtos.cod
            colunas[1].innerHTML = produtos.nome
            colunas[2].innerHTML = produtos.quantidade
            colunas[3].innerHTML = "R$ " + produtos.preco

            linha.querySelector('#excluir').addEventListener("click", () => {
                modalExcluir.classList.remove('model')
                modalExcluir.querySelector('#cod').innerHTML = produtos.cod
            })

            linhaModelo.querySelector('#editar').addEventListener("click", () => {
                modalEditar.classList.remove('model')
                inputCodigo.value = produtos.cod
                inputNome.value = produtos.nome
                inputQtd.value = produtos.quantidade
                inputValor.value = produtos.preco
            })

            listarProdutos.appendChild(linha)
        })
    })


function fecharModalExcluir() {
    modalExcluir.classList.add('model')

}

function fecharModalEditar() {
    modalEditar.classList.add('model')
}

function editarProduto() {
    let produto = {
        'cod': inputCodigo.value,
        'nome': inputNome.value,
        'quantidade': inputQtd.value,
        'preco': inputValor.value
    }

    fetch('http://localhost:5000/produto', {
        'method': 'put',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(produto)
    })

        .then(res => { return res.json })
        .then(resp => {
            if (resp.cod != undefined) {
                alert('Produto alterado com sucesso')
                fecharModalEditar();
                window.location.reload()
            } else {
                alert('Falha ao salvar alterações!')
            }
        })

}

function excluirProduto() {
    let data = {
        'cod': document.querySelector('#cod').innerHTML
    }
    fetch('http://localhost:5000/produto', {
        'method': 'delete',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(data)
    })
        .then(res => { return res.json })
        .then(resp => {
            if (resp.cod !== undefined) {
                alert('Produto excluido com sucesso')
                window.location.reload()
            } else {
                alert('Falha ao excluir produto')
            }
        })
}