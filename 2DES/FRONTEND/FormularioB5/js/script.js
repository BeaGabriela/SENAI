const nomeInput = document.querySelector('#validationNome')
const cpfInput = document.querySelector('#validationCPF')
const dddInput = document.querySelector('#validationDDD')
const telefoneInput = document.querySelector('#validationTelefone')
const tipoInput = document.querySelector('#validationTipo')
const logInput = document.querySelector('#validationLog')
const numeroCasaInput = document.querySelector('#validationNumeroCasa')
const cepInput = document.querySelector('#validationCEP')
const cidadeInput = document.querySelector('#validationCidade')
const estadoInput = document.querySelector('#validationEstado')
const bairroInput = document.querySelector('#validationBairro')

var btn = document.querySelector('#saveCad')
const form = document.querySelector('#form')

function validar() {
    if (cpfInput.value.length > 0) {
        if (validaCPF(cpfInput.value)) {
            alert("CPF Válido");
        } else {
            alert("CPF Inválido");
        }
    } else {
        alert("Digite um CPF no campo acima");
    }
}


btn.addEventListener('click', () => {
    let cliente = {
        'nome': nomeInput.value,
        'cpf': cpfInput.value,
        'ddd': dddInput.value,
        'telefone': telefoneInput.value,
        'tipo': tipoInput.value,
        'logradouro': logInput.value,
        'bairro': bairroInput.value,
        'n_casa': numeroCasaInput.value,
        'cep': cepInput.value,
        'cidade': cidadeInput.value,
        'estado': estadoInput.value,
    }

    console.log(cliente)

    fetch('http://localhost:3000/banco/cliente', {
        'method': 'POST',
        'headers': {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(cliente)
    })

        .then(resp => resp.status)
        .then(res => {
            if (res == 201) {
                alert('Cliente cadastrado com sucesso!')
                window.location.reload()
            } else {
                alert('Erro ao cadastrar cliente')
            }
        })
        .catch(err => console.log(err))

})


function validaCPF(cpfInput) {
    cpfInput = cpfInput.replaceAll(".", "");
    cpfInput = cpfInput.replaceAll("-", "");
    let digito = cpfInput.substring(9, 11);

    if (cpfInput != "11111111111"
        && cpfInput != "22222222222"
        && cpfInput != "33333333333"
        && cpfInput != "44444444444"
        && cpfInput != "55555555555"
        && cpfInput != "66666666666"
        && cpfInput != "77777777777"
        && cpfInput != "88888888888"
        && cpfInput != "99999999999"
        && cpfInput != "00000000000"
        && digito === calculaDigito(cpfInput)
    ) {
        return true;
    } else {
        return false;
    }
}

function calculaDigito(cpfInput) {
    let cpfSemDigito = cpfInput.substring(0, 9);
    let digito = "";
    let peso = 10, soma = 0, d1 = 0, d2 = 0;
    for (i = 0; i < 9; i++) {
        soma += parseInt(cpfSemDigito.charAt(i) + "") * (peso - i);
    }
    d1 = soma % 11;
    if (d1 < 2)
        d1 = 0;
    else
        d1 = 11 - d1;
    soma = 0;
    cpfSemDigito += d1;
    peso = 11;
    for (i = 0; i < 10; i++) {
        soma += parseInt(cpfSemDigito.charAt(i) + "") * (peso - i);
    }
    d2 = soma % 11;
    if (d2 < 2)
        d2 = 0;
    else
        d2 = 11 - d2;
    digito += d1;
    digito += d2;
    return digito;
}

