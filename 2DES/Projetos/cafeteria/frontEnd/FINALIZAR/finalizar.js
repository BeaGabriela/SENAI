function carregar(){
    var resumo = localStorage.getItem('fim')
    resumo = JSON.parse(resumo)

    console.log(resumo)
    // console.log(validandoInputRetirada())
    validandoInputRetirada()
    ValidandoPagamento()
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
  