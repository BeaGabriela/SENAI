
var dees = document.querySelector('#descricaoo')
var vaa = document.querySelector('#valorr')
var tipp = document.querySelector('#tipoo')


const btCadedit = document.querySelector("#cadedit");
var editar = document.querySelector('.editar')
var input = document.querySelector("#d")

var total = 0
var totalzinho =0
var  valor
var  valorzinho
const vetor = document.querySelectorAll('tr')

var co = document.querySelector('.coluninhas')
var colu = document.querySelector('.coluninhas1')
var t1 = document.querySelector('#corpo')
var t2 =  document.querySelector('#corpinho')

function ll() {
    fetch('http://localhost:5000/livrocaixa/lancamentos')
        .then(res => { return res.json() })
        .then(data => {
            data.forEach(dividas => {

                if(dividas.tipo == 'D' || dividas.tipo == 'd' ){
                    var p = document.querySelector('#debito')
                    var co = document.querySelector('.coluninhas').cloneNode(true)
                    
                     p.innerHTML = 'Débito'
                     co.querySelector('#numero').innerHTML = dividas.n_lancamento
                     co.querySelector('#data').innerHTML = dividas.datas
                     co.querySelector('#descricao').innerHTML = dividas.descricao
                     co.querySelector('#valor').innerHTML = dividas.valor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
                     co.querySelector('#tipo').innerHTML = dividas.tipo
                    
                    t1.appendChild(co)
                    soma(dividas.valor)
                }else{
                    var p1 = document.querySelector('#credito')
                    var colu = document.querySelector('.coluninhas1').cloneNode(true)
                
                    p1.innerHTML = 'Crédito'
                     colu.querySelector('#nu').innerHTML = dividas.n_lancamento
                     colu.querySelector('#da').innerHTML = dividas.datas
                     colu.querySelector('#des').innerHTML = dividas.descricao
                     colu.querySelector('#val').innerHTML = dividas.valor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
                     colu.querySelector('#ti').innerHTML = dividas.tipo
    
                    t2.appendChild(colu)
                    soma(dividas.valor)
                }
                document.querySelector('#saldo').innerHTML= `Saldo acumulado = ${total.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`
            })
        })
}

function busca(){
   
    var input = document.querySelector("#d").value
    // console.log(fetch('http://localhost:5000/livrocaixa/lancamentos?datas=' + input))
    fetch('http://localhost:5000/livrocaixa/lancamentos?datas=' + input)
    .then((res) =>{ return res.json()})
    .then((data) => {
        data.forEach(tudo => {
            if(tudo.datas == input){
            if(tudo.tipo == 'D' || tudo.tipo == 'd' ){
                var p = document.querySelector('#debito')
                var co = document.querySelector('.coluninhas').cloneNode(true)
                
                 p.innerHTML = 'Débito'
                 co.querySelector('#numero').innerHTML = tudo.n_lancamento
                 co.querySelector('#data').innerHTML = tudo.datas
                 co.querySelector('#descricao').innerHTML = tudo.descricao
                 co.querySelector('#valor').innerHTML = tudo.valor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
                 co.querySelector('#tipo').innerHTML = tudo.tipo
                 
                t1.appendChild(co)
                 console.log(co)
                 soma(-tudo.valor)
                 sominha(-tudo.valor)
                 
            }else{
                var p1 = document.querySelector('#credito')
                var colu = document.querySelector('.coluninhas1').cloneNode(true)
            
                p1.innerHTML = 'Crédito'
                 colu.querySelector('#nu').innerHTML = tudo.n_lancamento
                 colu.querySelector('#da').innerHTML = tudo.datas
                 colu.querySelector('#des').innerHTML = tudo.descricao
                 colu.querySelector('#val').innerHTML = tudo.valor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
                 colu.querySelector('#ti').innerHTML = tudo.tipo
                 console.log(colu)
                t2.appendChild(colu)
                soma(tudo.valor)
                sominha(tudo.valor)
            }

        }
        document.querySelector('#saldo').innerHTML= `Saldo acumulado = ${totalzinho.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`
        })
    })
    
}

    function datas(){
        console.log('ta')
       let tabelaDebi = t1.querySelectorAll('tr')
       let tabelacre = t2.querySelectorAll('tr')

       for(let i = tabelaDebi.length; i>2; i--){
        t1.deleteRow(i-1)
       }

       for(let i = tabelacre.length; i>2; i--){
        t2.deleteRow(i-1)
       }

       busca()
       
    }


       function abrirModalCadastro() {
        btCadedit.onclick = () => { cadastrar(); }
        dees.value = "";
        vaa.value = "";
        tipp.value = "";
        editar.classList.remove("model");
    }

    function fecharModalCadastro(){
        editar.classList.add('model')
    }
       function cadastrar(){
        let lanc = {
            "descricao":dees.value,
            "valor":vaa.value,
            "tipo":tipp.value,
        };
    
        fetch('http://localhost:5000/livrocaixa/lancamentos', {
            "method":"POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(lanc)
        })
        .then(res => {return res.json()})
        .then(resp => {
            if(resp.descricao !== undefined){
                alert("Lancamentos Cadastrado Com Sucesso !");
                window.location.reload();
            }else {
                alert("Falha ao cadastrar Lancamentos");
            }
        
         })
         }
    

    function soma(valor){
        total += valor
    }

    function sominha(valorzinho){
        totalzinho = 0
        totalzinho+=valorzinho
        
    }