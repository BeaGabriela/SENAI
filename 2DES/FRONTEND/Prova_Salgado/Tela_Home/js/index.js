var userInfo = JSON.parse(localStorage.getItem('create'))
var itens = [];
var PModel = document.querySelector('.com')
var nav = document.querySelector('.tela_comen')


function carregar() {
    var corpo = document.querySelector('.Corpo_Tabela')
    corpo.classList.remove('model')

    const options = { method: 'GET' };

    fetch('http://10.87.207.2:3000/salgados', options)
        .then(response => response.json())
        .then((r) => {
            itens = r
            r.forEach((salgado) => {
                var tabela = document.querySelector('.tabela').cloneNode(true)
                tabela.classList.remove('model')

                tabela.querySelector('#id').innerHTML = salgado.id
                tabela.querySelector('#nome').innerHTML = salgado.nome
                tabela.querySelector('#des').innerHTML = salgado.descricao
                tabela.querySelector('#foto').src += salgado.foto
                tabela.querySelector('#apagar').setAttribute('onclick', `del(${salgado.id})`);

                corpo.appendChild(tabela);
            })
        })
        .catch(err => console.error(err));
}

const indice = (id) => {
    let indice = -1;
    for (i = 0; i < itens.length; i++) {
        if (itens[i].id == id)
            indice = i;
    }
    return indice;
}

const del = (id) => {
    const options = {
        method: 'DELETE'
    };
    if (confirm("Confirma a exclusão do item " + id)) {
        fetch('http://10.87.207.2:3000/salgado/' + id, options)
            .then(res => res.status)
            .then(res => {
                if (res == 204)
                    window.location.reload();
            })
            .catch(err => console.error(err));
    }
}

function Comentarios() {
    PModel.classList.remove('model')
    nav.classList.remove('model')

    const options = { method: 'GET' };

    fetch('http://10.87.207.2:3000/avaliacoes/1', options)
        .then(response => response.json())
        .then(res => {
            res.forEach(r => {

                nav.cloneNode(true)
                nav.querySelector('#id1').innerHTML = r.id
                nav.querySelector('#id_user').innerHTML = r.id_usuario
                nav.querySelector('#id_salga').innerHTML = r.id_salgado
                nav.querySelector('#nota').innerHTML = r.nota
                nav.querySelector('#avali').innerHTML = r.avaliacao
                nav.querySelector('#nome').innerHTML = r.nome

                document.querySelector('.comentarios').appendChild(nav)
            })

          
        })


}