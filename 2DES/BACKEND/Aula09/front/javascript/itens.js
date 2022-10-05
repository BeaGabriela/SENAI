const uri = 'http://localhost:3000/patrimonio/itens/';
const corpo = document.querySelector("#corpo");
var itens = [];
const modalEditar = document.querySelector('.criar')
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

function abrirmodal() {
    card.querySelector("#ni").value = '';
    card.querySelector("#aquisicao").value = '';
    card.querySelector("#denominacao").value = '';
    card.querySelector("#valor").value = '';
    modalEditar.classList.remove('model')
}

function fecharModa(){
    modalEditar.classList.add('mode')
}

const create = () => {
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
