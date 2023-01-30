var informacoesId = localStorage.getItem('informacoes')
console.log(informacoesId)

function carregar() {
    var imagemProduto = document.querySelector('#imagemP')
    var nomePedido = document.querySelector('#nomeComida')
    var descricao = document.querySelector('#detalhes')
    var valorT = document.querySelector('#valorT')
    var p1 = document.querySelector('#p')
    var m = document.querySelector('#m')
    var g = document.querySelector('#g')
    var quente = document.querySelector('#quente')
    var frio = document.querySelector('#frio')
    var acucar= document.querySelector('#AC')
    var adocante = document.querySelector('#AD')
    var mel = document.querySelector('#CM')
    var sem = document.querySelector('#SE')
    var armazenar = localStorage.getItem('dados')
    console.log(armazenar)
  

    fetch('http://localhost:3000/comida')
        .then(res => { return res.json() })
        .then(p => {
            p.forEach(comida => {
                if (comida.id_comida == informacoesId) {
                    console.log(comida.id_comida)
                    imagemProduto.src = '../assets/' + comida.img
                    nomePedido.innerHTML = comida.nome_comida
                    descricao.innerHTML = comida.descricao

                    p1.addEventListener('click', () => {
                        valorT.value = comida.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    })

                    m.addEventListener('click', () => {
                        var v = Number(comida.valor) + 2.50
                        valorT.value = v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    })

                    g.addEventListener('click', () => {
                        var v1 = Number(comida.valor) + 5
                        valorT.value = v1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    })

                    quente.addEventListener('click', () => {
                        quente.style.backgroundColor = '#8b4513'
                        frio.style.backgroundColor = '#d2691e'
                    })

                    frio.addEventListener('click', () => {
                        frio.style.backgroundColor = '#8b4513'
                        quente.style.backgroundColor = '#d2691e'
                    })

                    acucar.addEventListener('click', () => {
                        acucar.style.backgroundColor = '#8b4513'
                        mel.style.backgroundColor = '#d2691e'
                        adocante.style.backgroundColor = '#d2691e'
                        sem.style.backgroundColor = '#d2691e'

                         localStorage.setItem('dados', acucar)
                        
                    })
                    mel.addEventListener('click', () => {
                        mel.style.backgroundColor = '#8b4513'
                        acucar.style.backgroundColor = '#d2691e'
                        adocante.style.backgroundColor = '#d2691e'
                        sem.style.backgroundColor = '#d2691e'
                    })
                    adocante.addEventListener('click', () => {
                        adocante.style.backgroundColor = '#8b4513'
                        mel.style.backgroundColor = '#d2691e'
                        acucar.style.backgroundColor = '#d2691e'
                        sem.style.backgroundColor = '#d2691e'
                    })
                    sem.addEventListener('click', () => {
                        sem.style.backgroundColor = '#8b4513'
                        mel.style.backgroundColor = '#d2691e'
                        adocante.style.backgroundColor = '#d2691e'
                        acucar.style.backgroundColor = '#d2691e'
                    })


                }
            })
        })
}