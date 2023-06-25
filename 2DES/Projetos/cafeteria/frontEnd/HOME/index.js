var alinhandoQuadrado = document.querySelector('.alinhandoOsQuadrados')


function carregar() {
    fetch('http://localhost:3000/comida')
        .then(res => { return res.json() })
        .then(u => {
            u.forEach(comida => {
                console.log(comida)
                if (comida.id_topico == 1) {
                    var DivQuadrado = document.querySelector('.quadradoEscolha').cloneNode(true)
                    DivQuadrado.classList.remove('model')

                    DivQuadrado.querySelector('#cappucino').src = '../imgs/' + comida.img
                    DivQuadrado.querySelector('#nomeComida').innerHTML = comida.nome
                    DivQuadrado.querySelector('#valorComida').innerHTML = comida.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

                    DivQuadrado.innerHTML += `<img src="../imgs/+.png" height="20vh" onclick='VisualizarItem(${comida.id})' />`
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

                DivQuadradoPopular.querySelector('#imgPopular').src = '../imgs/' + comida.comidas.img
                DivQuadradoPopular.querySelector('#nomePopular').innerHTML = comida.comidas.nome
                DivQuadradoPopular.querySelector('#descricaoPopular').innerHTML = comida.comidas.descricao
                DivQuadradoPopular.querySelector('#valorPopular').innerHTML = comida.comidas.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                

                document.querySelector('.alinharP').appendChild(DivQuadradoPopular)

            })

        })

    fetch('http://localhost:3000/comida')
        .then(res => { return res.json() })
        .then(u => {
            console.log(u)
            u.forEach(comida => {
                if (comida.id_topico == 2) {
                    var cha = document.querySelector('.quadradoCha').cloneNode(true)
                    cha.classList.remove('model')

                    cha.querySelector('#chaI').src = '../imgs/' + comida.img
                    cha.querySelector('#nomecha').innerHTML = comida.nome
                    cha.querySelector('#valorCham').innerHTML = comida.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    cha.innerHTML += `<div id='pegandoInfos' onclick='VisualizarItem(${comida.id})'>Visualizar</div>`

                    document.querySelector('.Alinhandochas').appendChild(cha)
                }
            })
        })

    fetch('http://localhost:3000/comida')
        .then(res => { return res.json() })
        .then(u => {
            u.forEach(comida => {
                if (comida.id_topico == 3) {
                    var choco = document.querySelector('.quadradoChocolate').cloneNode(true)
                    choco.classList.remove('model')

                    choco.querySelector('#chocolate').src = '../imgs/' + comida.img
                    choco.querySelector('#nomechocolate').innerHTML = comida.nome
                    choco.querySelector('#valorChoco').innerHTML = comida.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    choco.innerHTML += `<div id='pegandoInfos' onclick='VisualizarItem(${comida.id})'>Visualizar</div>`

                    document.querySelector('.alinhandoChoco').appendChild(choco)
                }
            })
        })


        fetch('http://localhost:3000/comida')
        .then(res => { return res.json() })
        .then(u => {
            u.forEach(comida => {
                if (comida.id_topico == 4) {
                    var comidas = document.querySelector('.quadradoomidaGeral').cloneNode(true)
                    comidas.classList.remove('model')

                    comidas.querySelector('#comidas').src = '../imgs/' + comida.img
                    comidas.querySelector('#comidasGeral').innerHTML = comida.nome
                    comidas.querySelector('#valorC').innerHTML = comida.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    comidas.innerHTML += `<div id='pegandoInfos' onclick='VisualizarItemComidas(${comida.id})'>Visualizar</div>`

                    document.querySelector('.alinhandoComida').appendChild(comidas)
                }
            })
        })
}

    function VisualizarItem(id){
        console.log(id)

        localStorage.setItem('informacoes', id)
        window.location.href = '../PEDIDO/index.html'
    }
    
    function VisualizarItemComidas(id){
        console.log(id)

        localStorage.setItem('informacoes', id)
        window.location.href = '../PEDIDO/comidas/comidas.html'
    }








// function mostrarImg(img) {
//     if (img != null) {
//         return `data:image/png;base64, ${img}`;
//     } else {
//         return `../assets/cha.png`
//     }
// }

