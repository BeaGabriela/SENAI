var url = 'http://localhost:3000/duplicatas/clientes'
var client = []
var tel = document.querySelector("#btn")


function clientes() {
  fetch(url)
    .then(resp => { return resp.json() })
    .then((cli) => {
      client = cli
      preencha()
    })
}


function preencha() {
  var indice = 0
  client.forEach((data) => {
    var coluninhas = document.querySelector("#coluninhas").cloneNode(true);

    coluninhas.classList.remove('model')
    coluninhas.querySelector('#cod').innerHTML = data.cod_cli;
    coluninhas.querySelector('#nome').innerHTML = data.nome;
    coluninhas.querySelector('#endereco').innerHTML = data.endereco;
    coluninhas.querySelector('#bairro').innerHTML = data.bairro;
    coluninhas.querySelector('#cidade').innerHTML = data.cidade;
    coluninhas.querySelector('#uf').innerHTML = data.uf;
    coluninhas.querySelector('#btn').innerHTML = `<img src='./icon.png' height='20px' onClick='telefones(${indice})'>`

    document.querySelector('tbody').appendChild(coluninhas);
    indice++
    console.log(indice)
  // data.telefones.forEach((date) => {
  //   document.querySelector('#tipo').innerHTML = date.tipo
  //   document.querySelector('#numero').innerHTML = date.numero
  // })
  
  })
  return indice;
}


function telefones(indice) {
  // showModal()
 
  client[indice].telefones.forEach((info) => {
    console.log(info);
    document.querySelector("#tipo").innerHTML = info.tipo;
  //   console.log(data)
  //   var form = document.querySelector('#form-modal').cloneNode(true);
  //   form.classList.remove('model')

  //   form.querySelector('#tipo').innerHTML = data.tipo
  //   form.querySelector('#numero').innerHTML = data.numero

  //   document.querySelector('.modal').appendChild(form)
  //   console.log(indice)


  })

}

function showModal() {
  const modal = document.querySelector(".modal");
  modal.classList.toggle("model");
}

