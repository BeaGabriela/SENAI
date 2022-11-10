function carregando(){
    var il = document.querySelector('#Login')
    var ip = document.querySelector('#password')
    var ino = document.querySelector('#nome')
    
    var btnCadastrar = document.querySelector('#cadastrar')
    
    btnCadastrar.addEventListener('click', () => {
        let FUNC = {
            'login': il.value,      
            'password': ip.value,
            'nome': ino.value
        };
    
        
        
        fetch('http://localhost:3000/estacionamento/funcionarios', {
            "method": 'POST',
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(FUNC)
        })
            .then(res => { return res.json() })
            .then(resp => {
                if (resp.login !== undefined) {
                    alert("Funcionário Cadastrado Com Sucesso !");
                    window.location.reload();
                     window.location.href = '../funcionario/index.html'
                } else {
                    alert("Falha ao cadastrar Entrada de VEICULO");
                }
            })
           
        
        
    })
    
    }