const produtos = document.querySelector('.produtos');
const produto = document.querySelector('.produto');
const modal = document.querySelector('.modal');

fetch('http://localhost:5000/produto')
    .then(resp => { return resp.json() })
    .then(produtos => {
        produtos.forEach(produto => {
            duplicarProduto(produto);
        })
    })

function cadastrar() {
    let cod = document.querySelector("#cod").value;
    let nome = document.querySelector("#nomen").value;
    let quantidade = document.querySelector("#quantidade").value;
    let preco = document.querySelector("#precoo").value;

    let data = JSON.stringify({
        'cod': cod,
        'nome': nome,
        'quantidade': quantidade,
        'preco': preco
    });

    fetch('http://localhost:5000/produto', {
        "method": 'POST',
        "headers": {
            "Content-Type": "application/json"
        },
        "body": data
    })

   
        .then(resp => { return resp.json() })
        .then(data => {duplicarProduto(data);
        showModal(); })
}

function showModal() {
    modal.classList.toggle("model");
}

function duplicarProduto(info) {
    let nPROD = produto.cloneNode(true);

    nPROD.classList.remove('model');

    nPROD.querySelector('#nome').innerHTML = info.nome;
    nPROD.querySelector('#preco').innerHTML = "R$ " + info.preco;

    produtos.appendChild(nPROD);

}