
function carregar() {
    var DivQuadrado = document.querySelector('.quadradoEscolha')
    DivQuadrado.cloneNode(true)
    DivQuadrado.classList.remove('model')
    
    fetch('http://localhost:3000/comida')
        .then(res => res.json())
        .then(u => {
            u.forEach(comida => {
                DivQuadrado.querySelector('#cappucino').src = `${mostrarImg(comida.img)}`
                DivQuadrado.querySelector('#nomeComida').innerHTML = comida.nome_comida
                DivQuadrado.querySelector('#valorComida').innerHTML = comida.valor

                document.querySelector('.alinhandoOsQuadrados').appendChild(DivQuadrado)


            }
            )
        }
        )
}

function mostrarImg(img) {
    if (img != null) {
        return `data:image/png;base64, ${img}`;
    } else {
        return `../assets/cha.png`
    }
}
