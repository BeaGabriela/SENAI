function validarLogin() {
    var validar = false
    var inputEmail = document.querySelector('#email')
    var inputsenha = document.querySelector('#senha')
    var info = document.querySelector('#informacoesLogin')

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"email":"${inputEmail.value}","senha":"${inputsenha.value}"}`
      };
      
      fetch('http://localhost:3000/usuario/login', options)
        .then(response => response.json())
        .then(response => {
            if(email != undefined && senha != undefined){
                response.forEach(n => {
                    if(n.nivel == 1){
                        console.log('admin')
                        window.location.href('../GERENCIAL/home.html')

                     }else{
                        console.log('user')
                        window.location.href('../OPERACIONAL/home.html')
                     }
                })
            
           }else{
            info.innerHTML = "Senha ou Email incorretos, ou não cadastrado"
           }
            })
    }


