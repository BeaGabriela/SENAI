function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (Fano.value.length == 0 || Number.parseInt(Fano.value) > ano) {
        window.alert(' [ERRO] Verifique os dados, e tente novamnete.')
    } else {
        var fsex = document.getElementsByName('radisex')
        var idade = ano - Number.parseInt(Fano.value)
        var genero = ''
         var img = document.createElement('img')
        img.setAttribute('id', 'foto') // Aqui cria uma tag imagem com o id = foto
        if (fsex[0].checked) {
            genero = 'um homem'
            if (idade >= 0 && idade < 10) {
               img.setAttribute('src', './JavaScript/bmenino.png')
            } else if (idade < 21) {
               img.setAttribute('src', './JavaScript/meninos18.png')
            } else if (idade < 50) {
                img.setAttribute('src', './JavaScript/homem30.png')
            } else {
                img.setAttribute('src', './JavaScript/idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'uma mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './JavaScript/bebemenina.png')
            } else if (idade < 21) {
                img.setAttribute('src', './JavaScript/garota18.png')
            } else if (idade < 50) {
                img.setAttribute('src', './JavaScript/mulher.png')
            } else {
                img.setAttribute('src', './JavaScript/idosa.png')
            }
        }
        img.style.height = '130px'
        img.style.alignItems= 'center'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }


}