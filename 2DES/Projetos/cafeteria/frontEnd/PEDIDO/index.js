function carregar() {
    // var tamanho = document.querySelector('.tamanhos')
    // var tempe = document.querySelector('.temperaturas')
    // var acucar = document.querySelector('.acucars')
    // var leite = document.querySelector('.leites')
    var id_comida = localStorage.getItem('informacoes')

    var imagemPrincipal = document.querySelector('#imagemP')
    var nomeComida = document.querySelector('#nomeComida')
    var descricao = document.querySelector('#detalhes')
    var valor = document.querySelector('#valor')


    fetch('http://localhost:3000/comida')
        .then(res => { return res.json() })
        .then(u => {
            u.forEach(comida => {
                 console.log(comida)
                if (comida.id == id_comida) {
                    imagemPrincipal.src = '../imgs/' + comida.img
               
                    nomeComida.innerHTML = comida.nome
                    descricao.innerHTML = comida.descricao
                    valor.value = comida.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                }


            })
        })
    var btnCompras = document.querySelector('#btnCompra')
    btnCompras.addEventListener('click', () => {

        var json = {
            "id_comida": id_comida,
            "temperatura": tempe.value,
            "tamanho": tamanho.value,
            "leite": leite.value,
            "adocar": acucar.value
        }


        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        };

        fetch('http://localhost:3000/cadastrarProporcoes', options)
            .then(response => response.status)
            .then(response => {
                if (response == 200) {
                    window.location.href = '../FINALIZAR/finalizar.html'
                    localStorage.setItem('fim', JSON.stringify(json))
                }
            })
    })
}
