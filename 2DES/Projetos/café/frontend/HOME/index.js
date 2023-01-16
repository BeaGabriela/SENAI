var alinhandoQuadrado = document.querySelector('.alinhandoOsQuadrados')


function carregar() {
    fetch('http://localhost:3000/comida')
        .then(res => { return res.json() })
        .then(u => {
            u.forEach(comida => {
                if (comida.id_topico == 1) {
                    var DivQuadrado = document.querySelector('.quadradoEscolha').cloneNode(true)
                    DivQuadrado.classList.remove('model')

                    DivQuadrado.querySelector('#cappucino').src = '../assets/' + comida.img
                    DivQuadrado.querySelector('#nomeComida').innerHTML = comida.nome_comida
                    DivQuadrado.querySelector('#valorComida').innerHTML = comida.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

                    alinhandoQuadrado.appendChild(DivQuadrado)
                }
            })
        })

    fetch('http://localhost:3000/popular')
        .then(res => { return res.json() })
        .then(p => {
            p.forEach(comida => {
                var DivQuadradoPopular = document.querySelector('.alinhandoDivPopular').cloneNode(true)
                DivQuadradoPopular.classList.remove('model')

                DivQuadradoPopular.querySelector('#imgPopular').src = '../assets/' + comida.img
                DivQuadradoPopular.querySelector('#nomePopular').innerHTML = comida.nome_comida
                DivQuadradoPopular.querySelector('#descricaoPopular').innerHTML = comida.descricao
                DivQuadradoPopular.querySelector('#valorPopular').innerHTML = comida.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

                document.querySelector('.alinharP').appendChild(DivQuadradoPopular)

            })

        })

    fetch('http://localhost:3000/comida')
        .then(res => { return res.json() })
        .then(u => {
            console.log(u)
            u.forEach(comida => {
                if (comida.id_topico == 2) {
                    var cha = document.querySelector('.quadradoCha')
                    cha.cloneNode(true)
                    cha.classList.remove('model')

                    cha.querySelector('#chaI').src = '../assets/' + comida.img
                    cha.querySelector('#nomecha').innerHTML = comida.nome_comida
                    cha.querySelector('#valorCham').innerHTML = comida.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

                    document.querySelector('.Alinhandochas').appendChild(cha)
                }
            })
        })

    fetch('http://localhost:3000/comida')
        .then(res => { return res.json() })
        .then(u => {
            u.forEach(comida => {
                if (comida.id_topico == 3) {
                    var choco = document.querySelector('.quadradoChocolate')
                    choco.cloneNode(true)
                    choco.classList.remove('model')

                    choco.querySelector('#chocolate').src = '../assets/' + comida.img
                    choco.querySelector('#nomechocolate').innerHTML = comida.nome_comida
                    choco.querySelector('#valorChoco').innerHTML = comida.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

                    document.querySelector('.alinhandoChoco').appendChild(choco)
                }
            })
        })


        fetch('http://localhost:3000/comida')
        .then(res => { return res.json() })
        .then(u => {
            u.forEach(comida => {
                if (comida.id_topico == 4) {
                    var comidas = document.querySelector('.quadradoomidaGeral')
                    comidas.cloneNode(true)
                    comidas.classList.remove('model')

                    comidas.querySelector('#comidas').src = '../assets/' + comida.img
                    comidas.querySelector('#comidasGeral').innerHTML = comida.nome_comida
                    comidas.querySelector('#valorC').innerHTML = comida.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

                    document.querySelector('.alinhandoComida').appendChild(comidas)
                }
            })
        })
}

// function AbrirModalCha() {
//     cafe.classList.add('model')
//     cha.classList.remove('model')
//     var Pcha = document.querySelector('#cha')
//     Pcha.style.border = 'solid 1px black'

//








// function mostrarImg(img) {
//     if (img != null) {
//         return `data:image/png;base64, ${img}`;
//     } else {
//         return `../assets/cha.png`
//     }
// }

