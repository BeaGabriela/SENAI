var user = document.querySelector('#usuario')
var senha = document.querySelector('#senha')

function logar(){

    var usuario = {
        'nome': user.value,
        'senha': senha.value
    }

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
      };
      options.body = JSON.stringify(usuario)
      
      fetch('http://10.87.207.2:3000/login', options)
        .then(response => response.json())
        .then(res => {
            if(res.erro === undefined ){
                localStorage.setItem('create',JSON.stringify({ "nome": res.nome }))
                window.location.href = '../Tela_Home/home.html'
            }else{
               
            }
        })
        .catch(err => console.error(err));
}