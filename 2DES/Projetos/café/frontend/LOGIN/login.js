function validarLogin() {
    var validar = false
    var inputEmail = document.querySelector('#email')
    var inputsenha = document.querySelector('#senha')
    var info = document.querySelector('#informacoesLogin')

    fetch('http://localhost:3000/Listar')
        .then(res => res.json())
        .then(u => {
            u.forEach(login => {
                if (inputEmail.value == '' || inputsenha == '') {
                    validar
                    info.innerHTML = 'Por favor, preencha os campos acima'
                } else if (inputEmail.value != login.email && inputsenha.value != login.senha) {
                    validar
                    info.innerHTML = ''
                    info.innerHTML = 'Senha ou email incorretos'
                    
                } else if( inputEmail.value == login.email && inputsenha.value == login.senha) {
                    info.innerHTML = 'Bem-vindo'
                    validar = true
                    inputEmail.style.border = '2px solid green'
                    inputsenha.style.border = '2px solid green'
                    localStorage.setItem('dados', login.nome, login.id_user)
                    window.location.href = '../HOME/index.html'
                }
                validar = false
            })
        })
}


function carregar(){
    var criarNovoCadastro = document.querySelector('#criarNovoCadastro')
}