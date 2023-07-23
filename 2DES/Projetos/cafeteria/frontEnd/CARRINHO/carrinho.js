// Pega o checkbox
const botaoDark = document.getElementById('toggle-dark');

// Verifica se tem no localStorage seleção do dark theme
if (localStorage.getItem('data-theme') == 'dark') {
    botaoDark.checked = true;
}

// Liga a função ao checkbox
botaoDark.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
    if (!botaoDark.checked) {
        changeThemeToLight()
    } else {
        changeThemeToDark()
    }
});

function carregar() {
    
    const informacoes = JSON.parse(localStorage.getItem('fim')) || [];
    console.log(informacoes.id_comida)
     
    var valorTotalTodosPedidos = 0;
    var totalValor = document.querySelector('#totalValor')

    fetch('http://localhost:3000/pedidos/1')
        .then(res => res.json())
        .then(u => {
            u.forEach(comida => {
                var divPedidos = document.querySelector('.divPedidos').cloneNode(true)
                divPedidos.classList.remove('model')
                // if(comida.id == informacoes.id_comida){
                    console.log(comida.nome)
                    divPedidos.querySelector('#img').src = '../imgs/' + comida.comidas.img
                    divPedidos.querySelector('#nome').innerHTML = comida.comidas.nome
                    divPedidos.querySelector('#valor').innerHTML = comida.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    divPedidos.querySelector('#excluir').addEventListener('click', () => {
                    
                            excluirPedido(comida.id)
                    })
                    
                    valorTotalTodosPedidos += comida.valorTotal;
                    console.log(valorTotalTodosPedidos)

                    totalValor.innerHTML = valorTotalTodosPedidos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    document.querySelector('main').appendChild(divPedidos)
                // }

            })
        })
}


function excluirPedido(id){
    console.log('excluir ' + id)

    const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    
    fetch(`http://localhost:3000/pedidos/${id} `, options)
    .then(response => response.status)
    .then(response => {
        if (response == 200) {
            console.log('excluido');
            window.location.reload()
        }else{
            console.log('erro')
        }
    })
}