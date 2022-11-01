class vendas {
    constructor(prod, qt, valor){
        this.produto = prod;
        this.qtd = qt
        this.preco = valor

    }
   
    subtotal(){
        return  this.qtd * this.preco
    }
    toString(){
        return this.produto + "  " + this.qtd + "  " + this.preco+ ' ' + this.subtotal()
    }

  
}

const venda = new vendas('Parafuso', 10, 1.5)
const venda1 = new vendas()




// vendas.qtd = 3;
// vendas.tipo = 'Carrinho';


 console.log(venda.subtotal())
 console.log(venda.toString())
 console.log(venda.produto)