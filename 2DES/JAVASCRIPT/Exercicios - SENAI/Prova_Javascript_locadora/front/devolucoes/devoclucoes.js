
function carregar(){
    fetch('http://localhost:3000/locacoes/vw_devolucoes')
    .then(res =>{return res.json()})
    .then(multas => {
        multas.forEach(m => {
            var tabela = document.querySelector('.tabelinha').cloneNode(true);
            tabela.querySelector('#id').innerHTML = m.id
            tabela.querySelector('#Nome').innerHTML = m.nome
            tabela.querySelector('#Telefone').innerHTML = m.telefone
            tabela.querySelector('#filmes').innerHTML = m.filmes
            tabela.querySelector('#Data').innerHTML = m.data_locacao
            tabela.querySelector('#multa').innerHTML = calcMulta(m.data_locacao)
            document.querySelector('tbody').appendChild(tabela)
        })
    })
}

function clientes(){
    window.location.href = '.././clientes/clientes.html'
}

function calcMulta(data) {
    const datediff = new Date() - new Date(data.split("T")[0]);
    let dias = parseInt(datediff / (1000 * 60 * 60 * 24)) - 1;
    if (dias > 3)
        return ((dias - 3) * 1.35).toFixed(2);
    else
        return 0;
}
