function carregar() {
    var tamanho = document.querySelector('.tamanhos')
    var tempe = document.querySelector('.temperaturas')
    var acucar = document.querySelector('.acucars')
    var leite = document.querySelector('.leites')

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
}
