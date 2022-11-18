
function CadastrarSaida() { //terminar o update
    var id = document.querySelector('#id')
    var iDS = document.querySelector('#datas_saida')
    var iHS = document.querySelector('#hora_saida')

    var btnCadastrar = document.querySelector('#cadastrar')

    btnCadastrar.addEventListener('click', () => {
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
                    window.location.href = '../entrada/index.html'
                } else {
                    alert("Falha ao cadastrar Saida de Carro");
                }
            })

    })



    fetch('http://localhost:3000/estacionamento/entrada')
        .then(res => { return res.json() })
        .then(entradas => {
            entradas.forEach(e => {
                if (e.vaga_ocupada == 1 || e.hora_saida == null || e.hora_saida == 'ABERTO' || e.hora_saida == '00:00:00') {
                    var tabelaID = document.querySelector('.tabelaID').cloneNode(true)
                    tabelaID.classList.remove('model')
                    tabelaID.querySelector('#idP').innerHTML = e.id
                    tabelaID.querySelector('#placa').innerHTML = e.placa
                    tabelaID.querySelector('#vaga').innerHTML = e.vaga
                    tabelaID.querySelector('#vaga').style.color = 'red'


                    document.querySelector('table').appendChild(tabelaID)

                } else {
                    var tabelaID = document.querySelector('.tabelaID').cloneNode(true)
                    tabelaID.classList.remove('model')
                    tabelaID.querySelector('#idP').innerHTML = e.id
                    tabelaID.querySelector('#placa').innerHTML = e.placa
                    tabelaID.querySelector('#vaga').innerHTML = e.vaga
                    tabelaID.querySelector('#vaga').style.color = 'green'

                    document.querySelector('table').appendChild(tabelaID)
                }
            })
        })
}
