
function carregar() {
    //listar Frotas
    var listarFrotas = document.querySelector('.listarFrotas')
    listarFrotas.classList.remove('model')

    //buscar
    var buscarFrotas_id = document.querySelector('#buscarFrotas')

    fetch('http://localhost:3000/frotas/'+  buscarFrotas_id.value)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.forEach(f => {
                var listarClone = document.querySelector('.cloneModal').cloneNode(true)
                listarClone.classList.remove('model')

                listarClone.querySelector('#id_frota').innerHTML = f.id
                listarClone.querySelector('#motorista').innerHTML = f.id_Motorista
                listarClone.querySelector('#veiculo').innerHTML = f.id_veiculo

                listarFrotas.appendChild(listarClone)
            })
        })


    //Listar motoristas
    var listarMotoristas = document.querySelector('.listarFrotas')
    listarMotoristas.classList.remove('model')


    //Motoristas
    newMotorista = document.querySelector('#newMoorista')
    AlterarMotorista = document.querySelector('#AlterarMotorista')
    deletarMotorista = document.querySelector('#DeletarMotorista')
    var cadastrar = document.querySelector('.cadastrarMotorista')
    var alterar = document.querySelector('.alterarMotorista')
    var deletar = document.querySelector('.deletarMotorista')

    newMotorista.addEventListener('click', () => {
        cadastrar.classList.remove('model')
        alterar.classList.add('model')
        deletar.classList.add('model')
        listarMotoristas.classList.add('model')

    })

    AlterarMotorista.addEventListener('click', () => {
        alterar.classList.remove('model')
        cadastrar.classList.add('model')
        deletar.classList.add('model')
        listarMotoristas.classList.add('model')
    })

    deletarMotorista.addEventListener('click', () => {
        alterar.classList.add('model')
        cadastrar.classList.add('model')
        deletar.classList.remove('model')
        listarMotoristas.classList.add('model')
    })

    //Frotas
    newFrotas = document.querySelector('#newFrota')
    AlterarFrotas = document.querySelector('#AlterarFrotas')
    deletarFrotas = document.querySelector('#DeletarFrotas')
    //input frotas
    var inputid_Motorista = document.querySelector('#id_moto')
    var inputid_Veiculo = document.querySelector('#id_veicu')

    var cadastrarF = document.querySelector('.cadastrarFrotas')
    var alterarF = document.querySelector('.alterarFrotas')
    var deletarF = document.querySelector('.deletarFrotas')

    newFrotas.addEventListener('click', () => {
        cadastrarF.classList.remove('model')
        alterarF.classList.add('model')
        deletarF.classList.add('model')
        listarFrotas.classList.add('model')
        var cadastrarDefinido = document.querySelector('#cadastrarFrota')

        cadastrarDefinido.addEventListener('click', () => {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: `{"id_Motorista":${inputid_Motorista.value},"id_veiculo":${inputid_Veiculo.value}}`
            };

            fetch('http://localhost:3000/frotas', options)
                .then(response => response.status)
                .then(response => {
                    if (response == 201) {
                        window.location.reload()
                    }
                })

        })


    })

    AlterarFrotas.addEventListener('click', () => {
        alterarF.classList.remove('model')
        cadastrarF.classList.add('model')
        deletarF.classList.add('model')
        listarFrotas.classList.add('model')
    })

    deletarFrotas.addEventListener('click', () => {
        alterarF.classList.add('model')
        cadastrarF.classList.add('model')
        deletarF.classList.remove('model')
        listarFrotas.classList.add('model')
    })
}