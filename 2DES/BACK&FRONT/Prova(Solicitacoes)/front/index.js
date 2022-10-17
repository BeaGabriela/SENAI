var tabela = document.querySelector(".tabelinha");
var coisinhas = document.querySelector(".coisinhas")

var ButtonCadastro = document.querySelector(".botoesCads");
var campos = document.querySelector(".campos");

var btnexcluir = document.querySelector('.btnExcluir')

var tb = document.querySelector('tbody')
var cod = document.querySelector('#cod')
var nome = document.querySelector('#nome')


function Listar() {
    tabela.classList.add('model')
    coisinhas.classList.remove('model')
    var listarDep = document.querySelector('#listarDep')
    listarDep.addEventListener('click', () => {
        fetch('http://localhost:5000/solicitacoes/Departamentos')
            .then(res => { return res.json() })
            .then(depart => {
                depart.forEach(dep => {
                    tabela.classList.remove('model')
                    var tbodyz = document.querySelector('.trzinho').cloneNode(true)
                    tbodyz.classList.remove('model')

                    tbodyz.querySelector('#co_de').innerHTML = dep.Cod_Depto
                    tbodyz.querySelector('#nome_d').innerHTML = dep.Nome_Depto

                    tb.appendChild(tbodyz)

                })
            })

    })
    var listarProd = document.querySelector('#listarProd')
    listarProd.addEventListener('click', () => {
        fetch('http://localhost:5000/solicitacoes/Produtos')
            .then(res => { return res.json() })
            .then(produto => {
                produto.forEach(pro => {
                    tabela.classList.remove('model')
                    var tbodyz = document.querySelector('.trzinho').cloneNode(true)
                    tbodyz.classList.remove('model')

                    cod.innerHTML = 'Cod_Produto'
                    nome.innerHTML = 'Nome_Produto'

                    tbodyz.querySelector('#co_de').innerHTML = pro.Cod_Produto
                    tbodyz.querySelector('#nome_d').innerHTML = pro.Nome_produto

                    tb.appendChild(tbodyz)

                })
            })
    })
}

function cadastrar() {

    ButtonCadastro.classList.remove('model')
    campos.classList.add('model')
    var cadastra = document.querySelector('.cadastrar')
    cadastra.classList.remove('model')

    var csolici = document.querySelector('#cadastrarSolici')
    csolici.addEventListener('click', () => {
        campos.classList.remove('model')

        var n_sol = document.querySelector('#n_sol')
        var depart = document.querySelector('#depto')
        var func = document.querySelector('#func')
        var prod = document.querySelector('#prod')
        var qtd = document.querySelector('#qtd')
        var total = document.querySelector('#total')

        var botãoCAD = document.querySelector('#cadastrarA')
        botãoCAD.addEventListener('click', () => {
            let solici = {
                "n_sol": n_sol.value,
                "depto": depart.value,
                "func": func.value,
                "prod": prod.value,
                "qtd": qtd.value,
                "total": total.value
            }
            console.log(solici)
            fetch('http://localhost:5000/solicitacoes/solicita_um_item', {
                "method": 'POST',
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(solici)
            })

                .then(res => { return res.json() })
                .then(resp => {
                    if (resp.n_sol !== undefined) {
                        alert("Solicitação Cadastrada Com Sucesso !");
                        window.location.reload();
                    } else {
                        alert("Falha ao cadastrar Solicitação");
                    }
                })
        })

    })

    var cprod = document.querySelector('#cadastrarPr')
    cprod.addEventListener('click', () => {
        campos.classList.remove('model')

        var p = document.createElement('p')
        var p1 = document.createElement('p')

        p.innerHTML = 'Codigo_Produto:'
        p1.innerHTML = 'Nome_Produto:'

        var InputVarNome = document.createElement('input')
        var InputCod = document.createElement('input')

        var btnc = document.createElement('button')
        btnc.innerHTML = 'Cadastrar'

        p.appendChild(InputVarNome)
        p1.appendChild(InputCod)

        campos.innerHTML = ''
        campos.appendChild(p)
        campos.appendChild(p1)
        campos.appendChild(btnc)

        btnc.addEventListener('click', () => {
            let produ = {
                "Cod_Produto": InputCod.value,
                "Nome_produto": InputVarNome.value
            }
            console.log(produ)
            fetch('http://localhost:5000/solicitacoes/Produtos', {
                "method": 'POST',
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(produ)
            })

                .then(res => { return res.json() })
                .then(resp => {
                    if (resp.Cod_Produto !== undefined) {
                        alert("Produto Cadastrado Com Sucesso !");
                        window.location.reload();
                    } else {
                        alert("Falha ao cadastrar Produto");
                    }
                })
        })

    })

}

function excluir() {
    btnexcluir.classList.remove('model')
    campos.classList.add('model')
    var cadastra = document.querySelector('.cadastrar')
    cadastra.classList.remove('model')

    var eDep = document.querySelector('#excluirDEP')
    eDep.addEventListener('click', () => {

        campos.classList.remove('model')

        var p3 = document.createElement('p')
        p3.innerHTML = 'Cod_Depto:'

        var inputExcluir = document.createElement('input')

        var buttnoExcluir = document.createElement('button')
        buttnoExcluir.innerHTML = 'Excluir'

        p3.appendChild(inputExcluir)

        campos.innerHTML = ''
        campos.appendChild(p3)
        campos.appendChild(buttnoExcluir)

        buttnoExcluir.addEventListener('click', () => {
            let data = {
                'Cod_Depto': inputExcluir.innerHTML
            }

            if (confirm('Você confirma a exclusão do departamaneto ' + inputExcluir.value + '?')) {
                fetch('http://localhost:5000/solicitacoes/Departamentos', {
                    "method": 'DELETE',
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    'body': JSON.stringify(data)

                })
                    .then(res => { return res.json() })
                    .then(resp => {
                        if (resp.Cod_Depto !== undefined) {
                            alert("Produto Excluido Com Sucesso !");
                            window.location.reload();
                        } else {
                            alert("Falha ao excluir Produto");
                        }
                    })
            }
        })

    })

    var excluiProd = document.querySelector('#excluiProd')
    excluiProd.addEventListener('click', () => {

        campos.classList.remove('model')

        var p3 = document.createElement('p')
        p3.innerHTML = 'Cod_Produto:'

        var inputExcluir = document.createElement('input')

        var buttnoExcluir = document.createElement('button')
        buttnoExcluir.innerHTML = 'Excluir'

        p3.appendChild(inputExcluir)

        campos.innerHTML = ''
        campos.appendChild(p3)
        campos.appendChild(buttnoExcluir)

        buttnoExcluir.addEventListener('click', () => {

            let data = {
                'Cod_Produto': inputExcluir.value
            }

            if (confirm('Você confirma a exclusão do Produto ' + inputExcluir.value + '?')) {
                fetch('http://localhost:5000/solicitacoes/produtos', {
                    "method": 'DELETE',
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    'body': JSON.stringify(data)

                })
                    .then(res => { return res.json() })
                    .then(resp => {
                        if (resp.Cod_Produto !== undefined) {
                            alert("Produto Excluido Com Sucesso !");
                            window.location.reload();
                        } else {
                            alert("Falha ao excluir Produto");
                        }
                    })
            }
        })

    })

}