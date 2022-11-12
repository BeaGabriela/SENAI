var nome = document.querySelector('#inputNome')
var senha = document.querySelector('#inputSenha')
var btn = document.querySelector('#btn')
var erro = document.querySelector('#incorreto')
var boolean = false;


btn.addEventListener('click', () => {
    fetch('http://localhost:3000/estacionamento/funcionarios')
        .then(res => res.json())
        .then(f => {
            f.forEach(p => {
                if (nome.value == p.login && senha.value == p.password) {
                    boolean = true
                    localStorage.setItem('create', JSON.stringify({'nome': p.nome}))
                    window.location.href = '../entrada/index.html'
                }
            })
        })
        
    if (!boolean) {
        erro.innerHTML = 'Login ou senha incorreto!'
        erro.style.color = 'red'
        erro.style.fontSize = '1.5rem'
    }
})



