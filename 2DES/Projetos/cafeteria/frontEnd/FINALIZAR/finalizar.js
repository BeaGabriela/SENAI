var id_user = localStorage.getItem('id_user')
var resumo = localStorage.getItem('fim')
resumo = JSON.parse(resumo)


function carregar(){
    // console.log(validandoInputRetirada())
    validandoInputRetirada()
    ValidandoPagamento()
    RevisandoPedido()
}

function validandoInputRetirada() {
    var modoRetirada = '';
  
    var entrega = document.querySelector('#entregar');
    var local = document.querySelector('#local');
    var retirada = document.querySelector('#retirada');
  
    entrega.addEventListener('change', () => {
      modoRetirada = '';
      modoRetirada = 'Entrega';
      console.log(modoRetirada);
    });
  
    local.addEventListener('input', () => {
        modoRetirada = '';
      modoRetirada = 'Local';
      console.log(modoRetirada);
    });
  
    retirada.addEventListener('input', () => {
        modoRetirada = '';
      modoRetirada = 'Retirar';
      console.log(modoRetirada);
    });
  
    return modoRetirada;
  }

  function ValidandoPagamento(){
    var selectPagamento = document.querySelector('.formaPagamento')

    selectPagamento.addEventListener('change', () => {
        if(selectPagamento.value == 'dinheiro'){
            console.log('dinheiro')
        }else if(selectPagamento.value == 'Pix'){
            console.log('pix')
        }else if(selectPagamento.value == 'credito'){
           console.log('credito')
        }else if(selectPagamento.value == 'debito'){
            console.log('debito')
        }else{
         console.log('nada')
        }
    })
  }

  function RevisandoPedido(){
    var valorTotalPedido = document.querySelector('#valorFinal')
    const informacoes = JSON.parse(localStorage.getItem('fim')) || [];
    console.log(informacoes.id_comida)
     
    var valorTotalTodosPedidos = 0;
    // var totalValor = document.querySelector('#totalValor')

    fetch(`http://localhost:3000/pedidos/${id_user}`)
        .then(res => res.json())
        .then(u => {
            u.forEach(comida => {
                var divPedidos = document.querySelector('.pedidoAnalise').cloneNode(true)
                divPedidos.classList.remove('model')
                    console.log(comida.nome)
                    divPedidos.querySelector('#pedidoIMG').src = '../imgs/' + comida.comidas.img
                    divPedidos.querySelector('#pedidoNome').innerHTML = comida.comidas.nome
                    divPedidos.querySelector('#opcoesPedidoTempe').innerHTML = comida.temperatura
                    divPedidos.querySelector('#opcoesPedidoAdocante').innerHTML = comida.acucar
                    divPedidos.querySelector('#opcoesPedidoleite').innerHTML = comida.leite
                    divPedidos.querySelector('#opcoesPedidoTamanho').innerHTML = comida.tamanho


                    divPedidos.querySelector('#valorCadaPedido').innerHTML = comida.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                   
                    
                    valorTotalTodosPedidos += comida.valorTotal;
                    console.log(valorTotalTodosPedidos)

                    valorTotalPedido.innerHTML = valorTotalTodosPedidos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    document.querySelector('.apendarPedido').appendChild(divPedidos)
                // }

            })
        })

  }
  