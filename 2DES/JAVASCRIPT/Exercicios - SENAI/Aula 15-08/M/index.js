
function pesquisa() {
    let inbusca = document.querySelector('#busca').value
    fetch('https://jsonplaceholder.typicode.com/todos') //Retorna uma promisse.
        .then((response) => { //Pode escolher qualquer nome; //Contêm o s dados da resposta do servidor.
            return response.json()
        })

        .then((data) => { //Serve para o retorno anterior. //Data é todo o vetor.
            //cloneNode serve para clonar a tag e o (true) clona os filhos tambem.
            data.forEach((usuario => {  //'usuario' pode ser qualquer nome. 
                let i = document.createElement('p')
                i.innerHTML = usuario.id
                let t = document.createElement('p')
                t.innerHTML = usuario.title

                var check = document.createElement('input')
                check.type = 'checkbox'

                var cartaozinho = document.createElement('div')
                cartaozinho.setAttribute('id', 'cartao')

                cartaozinho.appendChild(i)
                cartaozinho.appendChild(t)
                cartaozinho.appendChild(check)

                if (usuario.completed == true) {
                    check.checked = true
                    check.disabled = true
                    cartaozinho.style.background = 'rgba(2, 255, 2, 0.123)'
                    check.style.checkmark = 'green'
                } else {
                    check.disabled = 'disabled'
                    cartaozinho.style.background = 'rgba(255, 0, 0, 0.199)'

                }


                document.querySelector('body').append(cartaozinho)

            }))
        })

    //div.classList.add('cartaozinho')

    }

    function criarElemento(id, title, completed){

    }