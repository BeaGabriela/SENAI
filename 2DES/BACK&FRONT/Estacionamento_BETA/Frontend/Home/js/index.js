var nome = document.querySelector('#inputNome')
var senha = document.querySelector('#inputSenha')
var btn = document.querySelector('#btn')
var erro = document.querySelector('#incorreto')
var boolean = false;

var pessoas = [
    {
        'login': 'user12',
        'senha': 'teste12'
    },

    {
        'login': 'u5er',
        'senha': 'testeteste'
    }
]
btn.addEventListener('click', () => {
    pessoas.forEach(p => {
        if (nome.value == p.login && senha.value == p.senha) {
            boolean = true
            window.location.href = '../entrada/index.html'
        }
    })
    if (!boolean) {
        erro.innerHTML = 'Login ou senha incorreto!'
        erro.style.color = 'red'
        erro.style.fontSize = '1.5rem'


    }
})


