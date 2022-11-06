
function CadastrarSaida(){ //terminar o update
    var id = document.querySelector('#id')
    var iDS = document.querySelector('#datas_saida')
    var iHS = document.querySelector('#hora_saida')

    var btnCadastrar = document.querySelector('#cadastrar')

    btnCadastrar.addEventListener('click', ()=>{
        let carro = {
            'id': id.value,
            'datas_saida': iDS.value,
            'hora_saida': iHS.value
        };
    
        fetch('http://localhost:3000/estacionamento/entrada', {
            "method": 'PUT',
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(carro)
        })
            .then(res => { return res.json() })
            .then(resp => {
                if (resp.id !== undefined) {
                    alert("Saida de carro Cadastrado Com Sucesso !");
                    window.location.reload();
                    window.location.href= '../entrada/index.html'
                } else {
                    alert("Falha ao cadastrar Saida de Carro");
                }
            })

    })
    
    
       

}
