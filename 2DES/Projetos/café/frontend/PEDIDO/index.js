function carregar() {
    var tamanho = document.querySelector('.tamanhos')
    var tempe = document.querySelector('.temperaturas')
    var acucar = document.querySelector('.acucars')
    var leite = document.querySelector('.leites')
    var id_comida = localStorage.getItem('informacoes')
    var imagemPrincipal = document.querySelector('#imagemP')
    var nomeComida = document.querySelector('#nomeComida')
    var descricao = document.querySelector('#detalhes')
    var valor = document.querySelector('#valor')

    fetch('http://localhost:3000/medida')
        .then(res => { return res.json() })
        .then(p => {
            p.forEach(m => {
                tamanho.cloneNode(true)
                tamanho.classList.remove('model')
                tamanho.innerHTML += `<option value='${m.id_medida}'>${m.medida}</option>`

                document.querySelector('.definindoSize').appendChild(tamanho)
            })
        })

    fetch('http://localhost:3000/tempe')
        .then(res => { return res.json() })
        .then(p => {
            p.forEach(m => {
                tempe.cloneNode(true)
                tempe.classList.remove('model')
                tempe.innerHTML += `<option value='${m.id}'>${m.temperatura}</option>`

                document.querySelector('.temperatura').appendChild(tempe)
            })
        })

    fetch('http://localhost:3000/acucar')
        .then(res => { return res.json() })
        .then(p => {
            p.forEach(m => {
                acucar.cloneNode(true)
                acucar.classList.remove('model')
                acucar.innerHTML += `<option value='${m.id_adocar}'>${m.adocar}</option>`

                document.querySelector('.acucar').appendChild(acucar)
            })
        })
    fetch('http://localhost:3000/leite')
        .then(res => { return res.json() })
        .then(p => {
            p.forEach(m => {
                leite.cloneNode(true)
                leite.classList.remove('model')
                leite.innerHTML += `<option value='${m.id_leite}'>${m.leite}</option>`

                document.querySelector('.leite').appendChild(leite)
            })
        })


    fetch('http://localhost:3000/comidas')
        .then(res => { return res.json() })
        .then(u => {
            u.forEach(comida => {
                if (comida.id_comida == id_comida) {
                    imagemPrincipal.src = '../assets/' + comida.img
                    nomeComida.innerHTML = comida.nome_comida
                    descricao.innerHTML = comida.descricao
                    // valor.value = comida.valor
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
