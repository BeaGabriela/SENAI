var inputValor = document.querySelector('#vizualizaçãoSenha')
var erroSenha = document.querySelector('#senhaErrada')

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
            if (response.status === 404) {
                erroSenha.innerHTML = 'Senha Incorreta!'
            } else {
                return response.json()

            }
        })

        .then((resp) => {
            if (inputValor.value == 0) {
                erroSenha.innerHTML = 'Preencha os campos acima!'
            } else if (inputValor.value != undefined) {
                localStorage.setItem('usuario', JSON.stringify(resp))
                window.location.href = '../pages/home.html'
            }
        })

}


