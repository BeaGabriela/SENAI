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
        .then(response => response.json())
        .then(response =>{
            if(email != undefined && senha != undefined){
                console.log(response.token)
                
                localStorage.setItem('user', JSON.stringify(response))

                if(response.niveis.nivel == 'Gerencial'){
                    window.location.href = '../GERENCIAL/home.html'
                }else {
                    window.location.href = '../OPERACIONAL/home.html'
                }
                
            }
            
        })



    }