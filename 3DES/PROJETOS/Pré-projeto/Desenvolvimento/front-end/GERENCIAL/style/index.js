
var cadastrarF = document.querySelector('.cadastrarFrotas')
var alterarF = document.querySelector('.alterarFrotas')
var deletarF = document.querySelector('.deletarFrotas')
var newFrotas = document.querySelector('#newFrota')
var deleterMotorista = document.querySelector('.deletarMotorista')
var Pdelet = document.querySelector('#deletarM')
var btnDeletarMotorista = document.querySelector('#btnDeletarMotorista')

var alterarNome = document.querySelector('#alterarNome')
var newManutencao = document.querySelector('#newManutencao')
var cadastrarManutencao = document.querySelector('.cadastrarManutencao')

function carregar() {

    var usuario = JSON.parse(localStorage.getItem('user'))
    console.log(usuario.token)


    var data = new Date()
    var dia = data.getDate()
    var mes = data.getMonth() + 1
    var ano = data.getFullYear()
    var dataCompleta = `${ano}-0${mes}-${dia}`

    //listar Frotas
    var listarFrotas = document.querySelector('.listarFrotas')
    listarFrotas.classList.remove('model')

    //buscar
    var buscarFrotas_id = document.querySelector('#buscarFrotas')

    fetch('http://localhost:3000/frotas/' + buscarFrotas_id.value)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.forEach(f => {
                var listarClone = document.querySelector('.cloneModal').cloneNode(true)
                listarClone.classList.remove('model')

                listarClone.querySelector('#id_frota').innerHTML = f.id
                listarClone.querySelector('#motorista').innerHTML = f.id_Motorista
                listarClone.querySelector('#veiculo').innerHTML = f.id_veiculo
                let imageEdit = document.createElement("img");
                imageEdit.id = 'imgEditar';
                imageEdit.src = '../../../assets/cadastro.png';
                imageEdit.addEventListener("click", () => {

                })
                listarClone.appendChild(imageEdit)
                listarFrotas.appendChild(listarClone)
            })
        })

    //Nova Frota
    newFrotas.addEventListener('click', () => {
        listarFrotas.classList.add('model')
        cadastrarF.classList.remove('model')


        //input frotas
        var inputid_Motorista = document.querySelector('#id_moto')
        var inputid_Veiculo = document.querySelector('#id_veicu')


        var cadastrarDefinido = document.querySelector('#cadastrarFrota')

        cadastrarDefinido.addEventListener('click', () => {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer' + usuario.token
                },
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


    //Listar motoristas
    var listarMotorista = document.querySelector('.listarMotoristas')
    listarMotorista.classList.remove('model')

    //buscar
    var buscarMotoristas_id = document.querySelector('#buscarMotoristas')

    fetch('http://localhost:3000/motorista/' + buscarMotoristas_id.value)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.forEach(f => {
                var listarClone = document.querySelector('.cloneModalMotoristas').cloneNode(true)
                listarClone.classList.remove('model')

                listarClone.querySelector('#id_Motorista').innerHTML = f.id
                listarClone.querySelector('#nomeMotorista').innerHTML = f.nome
                let imageEdit = document.createElement("img");
                imageEdit.id = 'imgEditar';
                imageEdit.src = '../../../assets/excluir.png';
                imageEdit.addEventListener("click", () => {
                    listarMotorista.classList.add('model')
                    deleterMotorista.classList.remove('model')
                    Pdelet.innerHTML = `Tem certeza que deseja excluir o <label>MOTORISTA</label> ${f.nome} de <label>ID:</label> ${f.id}?`

                    btnDeletarMotorista.addEventListener('click', () => {
                        const options = { method: 'DELETE' };

                        fetch(`http://localhost:3000/motorista/${f.id}`, options)
                            .then(response => response.status)
                            .then(response => {
                                if (response == 200) {
                                    window.location.reload();
                                }
                            })
                    })
                })
                listarClone.appendChild(imageEdit)
                listarMotorista.appendChild(listarClone)
            })
        })

    //Motoristas
    newMotorista = document.querySelector('#newMoorista')
    var cadastrarM = document.querySelector('.cadastrarMotorista')
    newMotorista.addEventListener('click', () => {
        var motoristaInput = document.querySelector('#cadastrarNome')
        var btnCadastrarM = document.querySelector('#cadastrarMotorista')
        cadastrarM.classList.remove('model')
        listarMotorista.classList.add('model')
        deleterMotorista.classList.add('model')

        btnCadastrarM.addEventListener('click', () => {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + usuario.token
                },
                body: `{"nome":"${motoristaInput.value}"}`
            };
            console.log(options);
            fetch('http://localhost:3000/motorista', options)
                .then(response => response.status)
                .then(response => {
                    if (response == 201) {
                        window.location.reload()
                    }
                })
        })
    })

    //Manutenções
    var listarManutencoes = document.querySelector('.ListarManutencoes');
    listarManutencoes.classList.remove('model')
    fetch('http://localhost:3000/manutencao')
        .then(response => response.json())
        .then(response => {
            console.log(response)
            response.forEach(manutencao => {
                var listarManutencao = document.querySelector('.listarManutencao').cloneNode(true)
                listarManutencao.classList.remove('model')

                listarManutencao.querySelector('#Id_manutencao').innerHTML = manutencao.id
                listarManutencao.querySelector('#veiculoM').innerHTML = manutencao.veiculo
                listarManutencao.querySelector('#dataInicio').innerHTML = manutencao.data_inicio.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                listarManutencao.querySelector('#valor').innerHTML = manutencao.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                listarManutencao.querySelector('#descricao').innerHTML = manutencao.descricao
                listarManutencao.querySelector('#data_fim').innerHTML = manutencao.data_fim
                let btnConcluirManutencao = document.createElement('button')

                btnConcluirManutencao.innerHTML = 'Concluir'
                btnConcluirManutencao.addEventListener('click', () => {
                    const options = {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + usuario.token
                        },
                        body: `{"veiculo":${manutencao.veiculo},"valor":${manutencao.valor},"descricao":"${manutencao.descricao}","data_fim":"${dataCompleta}"}`
                    };

                    fetch(`http://localhost:3000/manutencao/${manutencao.id}`, options)
                        .then(response => response.status)
                        .then(response => {
                            if (response == 200) {
                                console.log('ok')
                            }
                        })
                })

                listarManutencao.appendChild(btnConcluirManutencao)
                listarManutencoes.appendChild(listarManutencao)
            })
        })

    newManutencao.addEventListener('click', () => {
        listarManutencoes.classList.add('model')
        cadastrarManutencao.classList.remove('model')
        var btnCadastrar = document.querySelector('#cadastrarBTNManutencao')

        btnCadastrar.addEventListener('click', () => {
            var inputVeiculo = document.querySelector('#inputveiculo')
            var inputValor = document.querySelector('#inputvalor')
            var inputDescricao = document.querySelector('#inputDescricao')

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + usuario.token
                },
                body: ` {"veiculo":${Number(inputVeiculo.value)},"valor":${Number(inputValor.value)},"descricao":"${inputDescricao.value}","data_fim":null}`
            };

            fetch('http://localhost:3000/manutencao', options)
                .then(response => response.status)
                .then(response => {
                    if (response == 201) {
                        window.location.reload()
                    }
                })
        })



    })

    //Operações
    var ListarOperacoes = document.querySelector('.ListarOperacoes')
    ListarOperacoes.classList.remove('model')


    fetch('http://localhost:3000/operacoes')
        .then(response => response.json())
        .then(response => {
            response.forEach(operacoes => {
                var listarOperacoes = document.querySelector('.listarOperacoes').cloneNode(true)
                listarOperacoes.classList.remove('model')

                listarOperacoes.querySelector('#Id_operacoes').innerHTML = operacoes.id
                listarOperacoes.querySelector('#veiculoO').innerHTML = operacoes.veiculo
                listarOperacoes.querySelector('#MotoristaOper').innerHTML = operacoes.motorista
                listarOperacoes.querySelector('#data_Inicio').innerHTML = operacoes.data_saida.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                listarOperacoes.querySelector('#descricaoOp').innerHTML = operacoes.descricao
                listarOperacoes.querySelector('#data_retorno').innerHTML = operacoes.data_retorno.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]

                let btnChegada = document.createElement('button')
                btnChegada.innerHTML = 'Entregue'
                btnChegada.addEventListener('click', () => {

                    const options = {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + usuario.token
                        },
                        body: `{"veiculo":${operacoes.veiculo},"motorista":${operacoes.motorista},"descricao":"${operacoes.descricao}","data_retorno":"${dataCompleta}"}`
                    };

                    console.log(options)

                    fetch(`http://localhost:3000/operacoes/${operacoes.id}`, options)
                        .then(response => response.status)
                        .then(response => {
                            if (response == 200) {
                                console.log('ok')
                            }
                        })
                })

                listarOperacoes.appendChild(btnChegada)
                ListarOperacoes.appendChild(listarOperacoes)

            })
        })


    //Veiculos
    var veiculo = document.querySelector('.ListarVeiculos')
    veiculo.classList.remove('model')
    //Listar
    fetch('http://localhost:3000/veiculos')
        .then(response => response.json())
        .then(response => {
            response.forEach(v => {
                var veiculosCLone = document.querySelector('.listarVeiculos').cloneNode(true)
                veiculosCLone.classList.remove('model')

                veiculosCLone.querySelector('#Id_Veiculos').innerHTML = v.id
                veiculosCLone.querySelector('#placa').innerHTML = v.placa
                veiculosCLone.querySelector('#tipoVeiculo').innerHTML = v.tipo

                veiculo.appendChild(veiculosCLone)
            })
        })

    //Cadastrar
    var btnCadatsrarVeiculo = document.querySelector('#newVeiculo')
    var cadastrarVeiculo = document.querySelector('.cadastrarVeiculos')
    var btnCadatsroVeiculos = document.querySelector('#cadastrarBTNVeiculo')
    btnCadatsrarVeiculo.addEventListener('click', () => {
        veiculo.classList.add('model')
        cadastrarVeiculo.classList.remove('model')
        var inputPlaca = document.querySelector('#inputPlaca')
        var inputTipo = document.querySelector('#inputTipo')
        btnCadatsroVeiculos.addEventListener('click', () => {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + usuario.token
                },
                body: `{"placa":"${inputPlaca.value}","tipo":${inputTipo.value}}`
            };

            fetch('http://localhost:3000/veiculos', options)
                .then(response => response.status)
                .then(response => {
                    if (response == 201) {
                        window.location.reload();
                    }
                })
        })
    })

}


