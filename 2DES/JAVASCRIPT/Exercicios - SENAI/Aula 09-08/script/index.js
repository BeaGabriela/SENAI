var fun = [
    {
        "funcionario": "Sancho Cedraz",
        "cargo": {
            "nome": "Analista",
            "nível": 2
        },
        "autorizado": true
    },
    {
        "funcionario": "Ionara Pederneiras",
        "cargo": {
            "nome": "Técnico",
            "nível": 2
        },
        "autorizado": true
    },
    {
        "funcionario": "Filipe Castanho",
        "cargo": {
            "nome": "Desenvolvedor",
            "nível": 1
        },
        "autorizado": false
    },
    {
        "funcionario": "Lívia Bicalho",
        "cargo": {
            "nome": "Analista",
            "nível": 3
        },
        "autorizado": true
    },
    {
        "funcionario": "Mauro Varanda",
        "cargo": {
            "nome": "Desenvolvedor",
            "nível": 3
        },
        "autorizado": false
    },
    {
        "funcionario": "Sandro Rosário",
        "cargo": {
            "nome": "Técnico",
            "nível": 3
        },
        "autorizado": true
    },
    {
        "funcionario": "Matheus Marco",
        "cargo": {
            "nome": "Técnico",
            "nível": 1
        },
        "autorizado": false
    },
    {
        "funcionario": "Armando Barras",
        "cargo": {
            "nome": "Engenheiro",
            "nível": 2
        },
        "autorizado": false
    }
]

var ifu = document.querySelector('.item-carrinho')

function carregar() {

    fun.forEach(item => {
        let novoItem = ifu.cloneNode(true)

        novoItem.classList.remove('modelo')

        novoItem.querySelector('#func').innerHTML = item.funcionario
        novoItem.querySelector('#nome').innerHTML = item.cargo.nome
        novoItem.querySelector('#nivel').innerHTML = item.cargo.nível

            //checked funciona através do booleans

        if(item.autorizado){
            
            novoItem.querySelector('#auto').innerHTML = 'Autorizado'
            novoItem.querySelector('#auto').style.color = 'green'       
            novoItem.querySelector('#img').src = 'https://th.bing.com/th/id/R.2a6fd73df15b8e7abd1a7deab1ed9844?rik=sxmx94vSQx%2f5IA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fcheck-mark-transparent-background%2fcheck-mark-transparent-background-6.png&ehk=ZDBwj%2fcGqPjcKPMV02JkDeQti0M1aEep8c%2f%2f3ra0ViE%3d&risl=&pid=ImgRaw&r=0'
            novoItem.querySelector('button').disabled = true
            novoItem.classList.add('corzinha1')
            novoItem.querySelector('#auto').style.boxShadow = '0px 1px 1px green'
        }else {
            novoItem.querySelector('#auto').innerHTML = 'Não Autorizado'
            novoItem.querySelector('#auto').style.boxShadow = '0px 1px 1px red'
            novoItem.querySelector('#auto').style.color = 'red'
            novoItem.classList.add('corzinha')
        }


        if (item.cargo.nome == 'Analista' || item.cargo.nome == 'Desenvolvedor') {
            if(item.cargo.nível >= 3){
                novoItem.querySelector('#nome-item').innerHTML = 'Admin'
            }
        }
                    

        document.querySelector('.carrinho').appendChild(novoItem)
    })
}

function removerItem(e) {
    e.parentNode.remove()  //ParentNode funciona basicamente para apagar o pai da variavel 'e'. No caso todas as variaveis dentro dela. 
}

// function Cadastrar(){
//     var f = document.querySelector('#f')
//     var c = document.querySelector('#c')
//     var nc = document.querySelector('#n')
//     var ni = document.querySelector('#nn')
//     var res = document.querySelector('#res')

//     var f1 = f.value
//     var nc1 = nc.value
//     var ni1 = ni.value
//     var res1 = res.value

//     var dados = f1, nc1, 
//     fun.push(f1,'',nc1, ni1, res1=true)  
// }