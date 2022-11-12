function carregando() {

    fetch('http://localhost:3000/estacionamento/View_entradas')
        .then(res => { return res.json() })
        .then(esta => {
            esta.forEach(e => {
                if (e.tipo == 'C' || e.tipo == 'c') {
                    if (e.vaga_ocupada == 1 || e.hora_saida == null || e.hora_saida == 'ABERTO' || e.hora_saida == '00:00:00') {
                        var c1 = document.querySelector('.lugar_deso').cloneNode(true)
                        c1.classList.remove('model')

                        c1.style.backgroundColor = 'green'
                        c1.querySelector('#local_deso').innerHTML = e.vaga
                        c1.querySelector('#local_deso').style.color = 'black'

                        document.querySelector('.v1').appendChild(c1)
                    }
                } else {
                    if (e.vaga_ocupada == 0 || e.hora_saida == null || e.hora_saida == 'ABERTO' || e.hora_saida == '00:00:00') {
                        var c1 = document.querySelector('.lugar_deso').cloneNode(true)
                        c1.classList.remove('model')

                        c1.style.backgroundColor = 'green'
                        c1.querySelector('#local_deso').innerHTML = e.vaga
                        c1.querySelector('#local_deso').style.color = 'black'

                        document.querySelector('.v1').appendChild(c1)
                    }
                }
            })
        })




    // var iD  = document.querySelector('#id')
    var iV = document.querySelector('#vaga')
    var iP = document.querySelector('#placa')
    // var iHE = document.querySelector('#hora_entrada')
    // var iDE = document.querySelector('#data_entrada')
    // var iHS = document.querySelector('#hora_saida')
    // var iDS = document.querySelector('#datas_saida')
    var iT = document.querySelector('#tipo')

    var btnCadastrar = document.querySelector('#cadastrar')



    btnCadastrar.addEventListener('click', () => {
        let carro = {
            'vaga': iV.value,
            'placa': iP.value,
            'tipo': iT.value
        };



        fetch('http://localhost:3000/estacionamento/entrada', {
            "method": 'POST',
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(carro)
        })
            .then(res => { return res.json() })
            .then(resp => {
                if (resp.vaga !== undefined) {
                    alert("Entrada de VEICULO Cadastrado Com Sucesso !");
                    window.location.reload();
                    window.location.href = '../entrada/index.html'
                } else {
                    alert("Falha ao cadastrar Entrada de VEICULO");
                }
            })



    })

}