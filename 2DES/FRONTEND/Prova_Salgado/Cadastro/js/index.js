var btnCad = document.querySelector('#btncadastro')

    var nome = document.querySelector('#nome')
    var salgado = document.querySelector('#salgado')
    var foto = document.querySelector('#foto')

   
   

    btnCad.addEventListener('click', () => {

        var cadastrandoComida = {
            "nome": nome.value,
            "descricao": salgado.value,
            "foto": foto.value
        }

        console.log(cadastrandoComida)
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        options.body = JSON.stringify(cadastrandoComida);
        fetch('http://10.87.207.2:3000/salgado', options)
            .then(response => response.status)
            .then(res => {
                if (res == 200) {
                    alert('Prodtuo cadastrado com sucesso !')
                    window.location.href = '../../Tela_Home/home.html'
                } else {
                    alert("Erro ao cadastrar.");
                }
            })
            .catch(err => console.error(err));
    })
