var inputValor = document.querySelector('#vizualizaçãoSenha')
var erroSenha = document.querySelector('#senhaErrada')
var entrar = document.querySelector('#entrar')
const numbers = []

function carregar() {
    botoes()
}

function botoes() {
    const buttons = document.querySelectorAll('button')
    
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
            if(numbers.length >= 6){
                entrar.disabled = false
                entrar.style.backgroundColor ="#fff"    
                entrar.style.color = "#35797d"
            }else{
                entrar.disabled = true     
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
                inputValor.value = ''
                numbers.length = 0
                entrar.disabled = true  
                entrar.style.backgroundColor ="#808080"    
                entrar.style.color ="#000"   
            } else {
                erroSenha.innerHTML = ''
                return response.json()

            }
        })

        .then((resp) => {
            if(resp.senha = undefined){
                erroSenha.innerHTML = 'Erro interno'
            } else if  (inputValor.value == 0) {
                erroSenha.innerHTML = 'Preencha os campos acima!'
            } else if (inputValor.value != undefined) {
                localStorage.setItem('usuario', JSON.stringify(resp))
                window.location.href = '../pages/home.html'
            }
        })

}


