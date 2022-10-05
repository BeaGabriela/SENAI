function carregar(){
    // var dia = window.document.getElementById('dia')
    // var mes = window.document.getElementById('mes')
    var dia = window.prompt("Digite um dia:")
    var mes = window.prompt('Digite um mês: ')
    var msg = window.document.getElementById('msg')
    var msg1 = window.document.getElementById('msg1')
    var img = window.document.getElementById('imagem')
    // var data = new Date()
    //  var dia = 3//data.getDate()
    // var mes = 12//data.getMonth() + 1
    msg.innerHTML = `Hoje é dia ${dia} / ${mes}`
    
    if(dia == 14 && mes == 04){
    document.body.style.background = '#a36e5c'
    img.src= './img/pascoa.jpg'
    msg.innerHTML = 'Hoje é Pascoa, Feliz Pascoa!'
    msg1.innerHTML = 'Coelhinho da Páscoa o que trazes pra mim? Um ovo, dois ovos, três ovos assim....'


    } else if( dia == 02 && mes == 07){
        document.body.style.background = '#dc4d2d'
        img.src = './img/junina.png'
        msg.innerHTML = 'Hoje é dia de São João!'
        msg1.innerHTML= 'Olha a cobra! é mentira! Pula Peão!'
    
    }else if(dia == 27 && mes==07){
    document.body.style.background = '#ec9ca9'
    img.src = './img/niver.png'
    msg.innerHTML = 'Hoje é o seu aniverário. Parabéns!'
    msg1.innerHTML = 'Parabéns para você, nessa data querida, muitas felicidades, muitos anos de vida....'

    } else if(dia == 30 && mes == 10){
        msg.innerHTML = 'Hoje é Hallowen! BUUU!'
        img.src = './img/hallowen.png'
        document.body.style.background = '#e84313'
        msg1.innerHTML = 'Gostosuras ou Travesssuras?'

    } else if(dia == 25 && mes == 12){
        msg.innerHTML= 'HO, HO, HO, Feliz Natal'
        img.src = './img/natal.png'
        document.body.style.background = '#ff2d36'
        msg1.innerHTML = 'Noite feliz... Noite Feliz '

    }else if(dia==31 && mes == 12){
        msg.innerHTML = 'Feliz Ano Novo!'
        img.src = './img/anonovo.png'
        document.body.style.background = 'gold'
        msg1.innerHTML = 'Hoje é um novo dia, de um novo tempo que começou...'
    }else{
        document.body.style.background = '#9a765e'
        msg.innerHTML = 'Hoje é um dia qualquer, mas isso não significa que não possa ser um dia incrivel, vai na fé. Força soldado!'
        img.src = './img/gato.png'
        msg1.innerHTML = 'Levanta a cabeça e luta mais um dia. Tu é forte.'
    }
    msg.style.textAlign= 'center'
  
}

