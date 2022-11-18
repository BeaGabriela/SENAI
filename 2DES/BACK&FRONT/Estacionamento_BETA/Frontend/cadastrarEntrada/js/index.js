function carregando() {
    fetch('http://localhost:3000/estacionamento/View_entradas')
        .then(res => { return res.json() })
        .then(esta => {
            esta.forEach(e => {
                if (e.tipo == 'C' || e.tipo == 'c') {
                    if (e.vaga_ocupada == 0 || e.hora_saida != null || e.hora_saida != 'ABERTO' || e.hora_saida != '00:00:00') {
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

 
    var iV = document.querySelector('#vaga')
    var iP = document.querySelector('#placa')
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

function  Validar(){
    var placa = document.querySelector('#placa')
        if(validarPlaca(placa.value)) {
            console.log = "Placa Válida";
        }else {
           alert("Placa Inválida")
        }
}
    
    function validarPlaca(placa) {
        if (placa.length == 7) {
            let modeloAntigo = /^[a-zA-Z]{3}[0-9]{4}$/;
            let modeloNovo = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/;
            let modeloMoto = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;
    
            if (modeloAntigo.test(placa) || modeloNovo.test(placa) || modeloMoto.test(placa)) return true;
        }
        return false;
    }
    



