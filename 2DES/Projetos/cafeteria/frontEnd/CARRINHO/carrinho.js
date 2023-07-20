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
     

    fetch('http://localhost:3000/comida')
        .then(res => res.json())
        .then(u => {
            u.forEach(comida => {
                var divPedidos = document.querySelector('.divPedidos').cloneNode(true)
                divPedidos.classList.remove('model')
                if(comida.id == informacoes.id_comida){
                    console.log(comida.nome)
                    divPedidos.querySelector('#img').src = '../imgs/' + comida.img
                    divPedidos.querySelector('#nome').innerHTML = comida.nome
                    divPedidos.querySelector('#valor').innerHTML = comida.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    

                    document.querySelector('main').appendChild(divPedidos)
                }

            })
        })
}
