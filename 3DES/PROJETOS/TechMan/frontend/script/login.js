var inputValor = document.querySelector('#vizualizaçãoSenha')

function carregar() {
    botoes()
}


function botoes() {
    const buttons = document.querySelectorAll('button')
    const numbers = []

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            const value = buttons[i].textContent

            if (value === 'C') {
                numbers.length = 0
            } else if (value === '⤶') {
                ValidarSenha()
            } else {
                numbers.push(value)
            }

            inputValor.value = numbers.join('')
        })
    }
}

function ValidarSenha() {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{"senha":"${inputValor.value}"}`
    };

    fetch('http://localhost:3000/login', options)
        .then((response) => {
            if (response != 200) {
                console.log('erro')
            } else {
                return response.json()
            }
        })
        .then((resp) => {
           localStorage.setItem('usuario', resp)
           window.location.href = "./home.html"
        })
}


