function carregar() {
    var tamanho = document.querySelector('#tamanhos')

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
}
