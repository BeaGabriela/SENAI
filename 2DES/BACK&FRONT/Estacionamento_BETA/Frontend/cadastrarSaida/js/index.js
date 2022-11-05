
function CadastrarSaida(){ //terminar o update
    var iDS = document.querySelector('#datas_saida')
    var iHS = document.querySelector('#hora_saida')
    
    let carro = {
        'datas_saida': iDS.value,
        'hora_saida': iHS.value
    };

    fetch('http://localhost:3000/estacionamento/entrada', {
        "method": 'UPDATE',
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(carro)
    })
        .then(res => { return res.json() })
        .then(resp => {
            if (resp.datas_saida !== undefined) {
                alert("Saida de carro Cadastrado Com Sucesso !");
                window.location.reload();
                window.location.href= '../entrada/index.html'
            } else {
                alert("Falha ao cadastrar Saida de Carro");
            }
        })
       

}
