var url = new URL(window.location.href);
console.log(url);
var params = new URLSearchParams(url.search)






var listaComentarios = document.getElementsByClassName('comentarios')
var itemComentario = document.getElementsByClassName('comentario') 

fetch('https://jsonplaceholder.typicode.com/comments' + params.get('UserId'))
.then(response => {
    return response.json()
})
.then(coments => {
    coments.forEach(coment => {
        let novoComentario = itemComentario.cloneNode(true)

        novoComentario.classList.remove('model')

        novoComentario.getElementById('email').innerHTML =coment.email
        novoComentario.getElementById('body').innerHTML =coment.bodyParser

        listaComentarios.appendChild(novoComentario)
    })
})