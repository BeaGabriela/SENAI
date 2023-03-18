function validarLogin() {
    var validar = false
    var inputEmail = document.querySelector('#email')
    var inputsenha = document.querySelector('#senha')
    var info = document.querySelector('#informacoesLogin')

    const options = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: `{"email":"${inputEmail.value}","senha":"${inputsenha.value}"}`
    };


    fetch('http://localhost:3000/usuario/login', options)
    .then((response) => {
        if (response.status != 200) {
            info.innerHTML = 'ERRO no usuário ou na senha. Tente novamente.'
        } else {
            return response.json()
        }
    })
    .then((resp) => {
        if (inputEmail.value == 0 && inputsenha.value == 0) {
            info.innerHTML = 'Preencha os campos acima!'
        } else if (inputEmail.value != undefined && inputsenha.value != undefined) {
            if (resp.niveis.nivel == 'Gerencial') {
                localStorage.setItem('user', JSON.stringify(resp))
                window.location.href = '../GERENCIAL/home.html'
            }else{
                localStorage.setItem('user', JSON.stringify(resp))
                window.location.href = '../OPERACIONAL/home.html'
            }
        }
    })


    }