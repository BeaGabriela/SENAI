
function carregar() {
    fetch('http://localhost:3000/comida')
        .then(res => { return res.json() })
        .then(u => {
            console.log(u)
            u.forEach(comida => {
                if (comida.id_topico == 1) {
                    var DivQuadrado = document.querySelector('.quadradoEscolha').cloneNode(true)
                    DivQuadrado.classList.remove('model')

                    DivQuadrado.querySelector('#cappucino').src = '../assets/' + comida.img
                    DivQuadrado.querySelector('#nomeComida').innerHTML = comida.nome_comida
                    DivQuadrado.querySelector('#valorComida').innerHTML = comida.valor.toLocaleString('pt-BR',{ style:'currency', currency:'BRL'})

                    document.querySelector('.alinhandoOsQuadrados').appendChild(DivQuadrado)
                }
            })
})
        fetch('http://localhost:3000/popular')
        .then(res => { return res.json() })
        .then(p => {
            p.forEach(comida => {
                    var DivQuadradoPopular = document.querySelector('.alinhandoDivPopular').cloneNode(true)
                    DivQuadrado.classList.remove('model')

                    DivQuadradoPopular.querySelector('#imgPopular').src = '../assets/' + comida.img
                    DivQuadradoPopular.querySelector('#nomePopular').innerHTML = comida.nome_comida
                    DivQuadradoPopular.querySelector('#descricaoPopular').innerHTML = comida.descricao
                    DivQuadradoPopular.querySelector('#valorPopular').innerHTML = comida.valor.toLocaleString('pt-BR',{ style:'currency', currency:'BRL'})

                    document.querySelector('main').appendChild(DivQuadradoPopular)
            
                })

            })
}

function mostrarImg(img) {
    if (img != null) {
        return `data:image/png;base64, ${img}`;
    } else {
        return `../assets/cha.png`
    }
}
