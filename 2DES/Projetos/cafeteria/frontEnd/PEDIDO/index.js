function carregar() {
    var id_comida = localStorage.getItem('informacoes')
    var id_user = localStorage.getItem('id_user')
    var user = Number(id_user)

    console.log(user);

    var imagemPrincipal = document.querySelector('#imagemP')
    var nomeComida = document.querySelector('#nomeComida')
    var descricao = document.querySelector('#detalhes')
    var valor = document.querySelector('#valor')


    fetch('http://localhost:3000/comida')
        .then(res => { return res.json() })
        .then(u => {
            u.forEach(comida => {
                console.log(comida)
                if (comida.id == id_comida) {
                    imagemPrincipal.src = '../imgs/' + comida.img

                    nomeComida.innerHTML = comida.nome
                    descricao.innerHTML = comida.descricao
                    valorDefinido = comida.valor
                    valor.value = comida.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                }
            })
        })


    //Setando valores para o tamanho
    var tamanhoDefinitivo = ''
    var valorDefinido = 0
    var valorDefinitivo = 0

    //Definindo o filtro dos tamanhos
    var selectTamanhos = document.querySelector('.tamanhos')
    selectTamanhos.addEventListener('change', () => {
        if (selectTamanhos.value == 'grande') {
            tamanhoDefinitivo = 'grande'
            valorDefinitivo = valorDefinido + 8
            valor.value = valorDefinitivo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        } else if (selectTamanhos.value == 'medio') {
            tamanhoDefinitivo = 'medio'
            valorDefinitivo = valorDefinido + 4
            valor.value = valorDefinitivo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        } else if (selectTamanhos.value == 'pequeno') {
            tamanhoDefinitivo = 'pequeno'
            valorDefinitivo = valorDefinido
            valor.value = valorDefinitivo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        } else {
            console.log('vazio');
            valorDefinitivo = valorDefinido
            valor.value = valorDefinitivo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }
    })




    //Definindo valores para o acucar
    var valorAcucar = 0
    var tipoAcucar = ''
    //Filtrando o select
    var selectAcucar = document.querySelector('.acucars')
    selectAcucar.addEventListener('change', () => {
        if (selectAcucar.value == 'acucar') {
            tipoAcucar = 'acucar'
            valor.value = valorDefinitivo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        } else if (selectAcucar.value == 'mel') {
            tipoAcucar = 'mel'
            valorAcucar = valorDefinitivo + 2
            valor.value = valorAcucar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        } else if (selectAcucar.value == 'adocante') {
            tipoAcucar = 'adocante'
            valor.value = valorDefinitivo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        } else {
            tipoAcucar = 'sem'
            valor.value = valorDefinitivo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }
    })

        //Setando o valor do leite
        var valorLeite = 0
        var tipoLeite = ''
    
        //Filtrando o select do leite
        var selectLeite = document.querySelector('.leites')
        selectLeite.addEventListener('change', () => {
            if (selectLeite.value == 'comum') {
                tipoLeite = 'comum'
                valorLeite = valorDefinitivo + valorAcucar
             console.log(valorLeite)
                valor.value = valorLeite.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            } else if (selectLeite.value == 'amendoa') {
                tipoLeite = 'amendoa'
                valorLeite = valorDefinitivo + valorAcucar + 6
                valor.value = valorLeite.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            } else if (selectLeite.value == 'coco') {
                tipoLeite = 'coco'
                valorLeite = valorDefinitivo + valorAcucar + 4
                valor.value = valorLeite.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            } else {
                tipoLeite = 'sem'
                valor.value = valorAcucar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            }
        })

        

    //Setando temperatura
    
    var tipoTempertura = ''
    //Filtrando o select
    var selectTemperatura = document.querySelector('.temperaturas')
    selectAcucar.addEventListener('change', () => {
        if (selectTemperatura.value == 'quente') {
            tipoTempertura = 'quente'
            
        } else if (selectTemperatura.value == 'morno') {
            tipoTempertura = 'morno'
        } else if (selectTemperatura.value == 'frio') {
            tipoTempertura = 'gelado'
        } else {
            conolse.log('vazio')
            
        }
    })

    

    var btnCompras = document.querySelector('#btnCompra')
    btnCompras.addEventListener('click', () => {

        var json = {
            "id_cliente":user,
            "id_comida": Number(id_comida),
            "temperatura": tipoTempertura,
            "tamanho": tamanhoDefinitivo,
            "leite": tipoLeite,
            "acucar": tipoAcucar,
            "valorTotal": valorAcucar
        }

        console.log(valorAcucar)
    
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        };
        
        fetch('http://localhost:3000/pedidosCreate', options)
        .then(response => response.status)
        .then(response => {
            if (response == 201) {
                window.location.href = '../FINALIZAR/finalizar.html'
                localStorage.setItem('fim', JSON.stringify(json))
            }else{
                console.log('erro')
            }
        })
        })
    // })
}
// }
