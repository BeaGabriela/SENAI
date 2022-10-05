const uri = 'http://localhost:3000/patrimonio/itens/';
const corpo = document.querySelector("#corpo");
var itens = [];
const modalCriar = document.querySelector('.criar')
const btnCadastrar = document.querySelector('#cadedit')
// uri é api local / url é api hospedada em outro local
const carregar = () => {
    const options = { method: 'GET' };
    fetch(uri, options)
        .then(res => res.json())
        .then(res => {
            itens = res;
            preencherTela();
        })
        .catch(err => console.error(err));
}

const preencherTela = () => {
    itens.forEach(e => {
        let card = document.querySelector(".card").cloneNode(true);
        card.classList.remove('model');
        card.querySelector("#ni").innerHTML += e.ni;
        card.querySelector("#aquisicao").innerHTML += e.aquisicao;
        card.querySelector("#denominacao").innerHTML += e.denominacao;
        card.querySelector("#valor").innerHTML += e.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        card.querySelector("#img").src = '../docs/assets/' + e.img;
        card.querySelector('#del').setAttribute('onclick', `del(${e.ni})`)
        corpo.appendChild(card);
    });
  
}

function editarrr(){
    itens.forEach(e => {
    let card = document.querySelector(".card").cloneNode(true);
    card.classList.remove('model');
        modalCriar.classList.remove('model')
        btnc.onclick = () =>{editar()}
        document.querySelector("#ni").value = e.ni;
        document.querySelector("#aquisicao").value = e.aquisicao
        document.querySelector("#denominacao").value = e.denominacao;
        document.querySelector("#valor").value = e.valor;
        document.querySelector("#img").value = e.src;
})
}

function abrirmodal() {
    document.querySelector("#ni").value = '';
    document.querySelector("#aquisicao").value = '';
    document.querySelector("#denominacao").value = '';
    document.querySelector("#valor").value = '';
    document.querySelector("#img").value = '';
    modalCriar.classList.remove('model')
}

function fecharModa(){
    modalCriar.classList.add('model')
}

const editar = () => {
    let soli = {
        'ni' : document.querySelector("#ni").value,
        'aquisicao': document.querySelector("#aquisicao").value,
        'denominacao': document.querySelector("#denominacao").value,
        'valor':  document.querySelector("#valor").value,
        'img': document.querySelector("#img").value
    }
    const options = {
        method: 'PUT',
        body : JSON.stringify(soli)
    };
    fetch(uri + ni, options)
        .then(res => res.status)
        .then(res => {
            if (res == 200) window.location.reload(res)
        })
        .catch(err => console.error(err));
}


const create = (ni) => {
    const options = {
        method: 'POST'
    };
    fetch(uri + ni, options)
        .then(res => res.status)
        .then(res => {
            if (res == 201) window.location.reload(res)
        })
        .catch(err => console.error(err));
}


const del = (ni) => {
    const options = {
        method: 'DELETE'
    };
    if (confirm(`Você confirma a exclusão do item ${ni} ?`)) {
        fetch(uri + ni, options)
            .then(res => res.status)
            .then(res => {
                if (res == 204) window.location.reload(res)
            })
            .catch(err => console.error(err));
    }
}
