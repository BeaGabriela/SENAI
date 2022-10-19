var cad = document.querySelector('.cad')
var cadA = document.querySelector('.cadastrarA')

var me = document.querySelector('.mensagem')
var mo = document.querySelector('.modelinho')

const username = document.querySelector('#nickname')
const imgs = document.querySelector('#perfil')

var userInfo = JSON.parse(localStorage.getItem('create'))

username.innerHTML = userInfo.username
imgs.src = "../../docs/assets/" + userInfo.img




function lendo() {
    document.querySelector('main').innerHTML = ''

    var tabela = document.querySelector('.tabela');
    tabela.classList.remove('model')

    fetch("https://patrimoniomongo.herokuapp.com/read/")
        .then(res => { return res.json() })
        .then((patrimonio) => {
            console.log(patrimonio)
            patrimonio.items.forEach((pat) => {
                var corpo = document.querySelector('.corpinho').cloneNode(true);
                corpo.classList.remove('model')

                corpo.querySelector('#a').src = '../../docs/assets/' + pat.img
                corpo.querySelector('#b').innerHTML = pat._id;
                corpo.querySelector('#c').innerHTML = pat.ni;
                let data = new Date(pat.aquisicao)
                corpo.querySelector('#d').innerHTML = data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('')[0]
                corpo.querySelector('#e').innerHTML = pat.denominacao;
                corpo.querySelector('#f').innerHTML = pat.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                document.querySelector('tbody').appendChild(corpo);

            })
        })
}

function cadastrarProduto() {
    cad.classList.remove('model')
    cadA.classList.remove('model')

    document.querySelector('#confirm').addEventListener('click', () => {

        var ini = document.querySelector('#Ini')
        var aqu = document.querySelector('#Iaqu')
        var den = document.querySelector('#Ideno')
        var valor = document.querySelector('#Ival')
        var img = document.querySelector('#Iim')



        let prod = {
            "ni": ini.value,
            "aquisicao": aqu.value,
            "denominacao": den.value,
            "valor": valor.value,
            "img": img.value
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        options.body = JSON.stringify(prod)

        fetch('https://patrimoniomongo.herokuapp.com/create', options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 201) {
                    alert('Prodtuo cadastrado com sucesso !')
                    window.location.reload()

                } else {
                    alert("Item já está cadastrado.");
                }
            })
            .catch(err => console.error(err));

    });

}

function FecharModal() {
    cad.classList.add('model')
}

function apagar() {
    let ok = confirm('Você confirma a exclusão desse item? ')

    let data = {
        "ni": document.querySelector("#c").innerHTML
    }

    fetch("https://patrimoniomongo.herokuapp.com/del/ni/" + data, {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    })
        .then(res => { return res.json() })
        .then(resp => {
            resp.remove()
        })
}



