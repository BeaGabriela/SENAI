function carregar() {
    var inputCliente = document.querySelector('#inputCliente')
    var inputEndereco = document.querySelector('#inputEndereco')
    var inputProduto = document.querySelector('#inputProduto')
    var inpuEntregador = document.querySelector('#inpuEntregador')
    var buttonGerarPedido = document.querySelector('#gerarPedido')
    var hora_preparo = document.querySelector('#hora_preparo')
    var data_pre = document.querySelector('#data_pre')

    var d = new Date()
    data_pre.value = d.getDate() + '/0' +  (d.getMonth() + 1 )+ '/' +  d.getFullYear()
    hora_preparo.value = d.getHours() + ':' + d.getMinutes()

    fetch('http://localhost:3000/pedido')
        .then(response => { return response.json() })
        .then(response => {
            response.forEach(r => {
                
                if (r.hora_entrega == null && r.hora_fim == null) {
                    var listarExecucoes = document.querySelector('.infoClienteAdd').cloneNode(true)
                    listarExecucoes.classList.remove('model')

                    listarExecucoes.querySelector('#id').innerHTML = r.id_pedido
                    listarExecucoes.querySelector('#cliente').innerHTML = r.cliente
                    listarExecucoes.querySelector('#endereco').innerHTML = r.endereco
                    listarExecucoes.querySelector('#produto').innerHTML = r.produto
                    listarExecucoes.querySelector('#horario').innerHTML = r.hora_pedido
                    listarExecucoes.querySelector('#data').innerHTML = r.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    listarExecucoes.innerHTML += `<button onclick="sairEntrega(${r.id_pedido})">Enviar Entrega</button>`


                    document.querySelector('.infosExecucao').appendChild(listarExecucoes)



                }
                 if (r.hora_fim == null && r.hora_entrega != null) {
                    var listarEntregas = document.querySelector('.infosAcaminho').cloneNode(true)
                    listarEntregas.classList.remove('model')

                    listarEntregas.querySelector('#id').innerHTML = r.id_pedido
                    listarEntregas.querySelector('#cliente').innerHTML = r.cliente
                    listarEntregas.querySelector('#endereco').innerHTML = r.endereco
                    listarEntregas.querySelector('#produto').innerHTML = r.produto
                    listarEntregas.querySelector('#horario').innerHTML = r.hora_pedido
                    listarEntregas.querySelector('#data').innerHTML = r.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    listarEntregas.querySelector('#entregador').innerHTML = r.id_entregador

                    listarEntregas.innerHTML += ` <button onclick='PedidoEntregue(${r.id_pedido})'>Pedido Entregue</button>`

                    document.querySelector('.infosCaminho').appendChild(listarEntregas)
                }

            })
        })

        fetch('http://localhost:3000/entregadores')
        .then(response => { return response.json() })
        .then(response => {
            response.forEach(r => {
                inpuEntregador.cloneNode(true)
                inpuEntregador.innerHTML += ` <option value="${r.id_entregador}">${r.id_entregador} - ${r.nome}</option>`

                document.querySelector('.entregador').appendChild(inpuEntregador)

            })
        })



    buttonGerarPedido.addEventListener('click', () => {
        var information = {
            "cliente": inputCliente.value,
            "endereco": inputEndereco.value,
            "produto": inputProduto.value,
            "id_entregador": inpuEntregador.value
        }

        console.log(information)

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(information)
        };

        fetch('http://localhost:3000/pedidoNew', options)
            .then(response => response.status)
            .then(resp => {
                if (resp == 201) {
                   window.location.reload()
                }
            })
    })

}

function sairEntrega(id){
    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: `{"id_pedido":${id}}`
      };
    
      fetch('http://localhost:3000/horaEntrega', options)
        .then(response =>  response.status)
        .then(resp => {
            if(resp == 200){
                window.location.reload()
            }
        })
}

function PedidoEntregue(idE){
    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: `{"id_pedido":${idE}}`
      };
    
      fetch('http://localhost:3000/horaFim', options)
        .then(response =>  response.status)
        .then(resp => {
            if(resp == 200){
                window.location.reload()
            }
        })

}