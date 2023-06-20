function carregar() {
    const areaDivs = document.querySelectorAll('.area');
    // Selecionar todas as divs
    const divs = document.querySelectorAll('div');


    // Função a ser executada quando uma div for clicada
    function handleDivClick(event, veiculos, preco) {
        console.log(event.target.id); // Exemplo: Exibir o conteúdo da div clicada
        const areaId = event.target.id; // Obter o ID da área clicada


        const veiculosArea = veiculos.filter(v => v.area === parseInt(areaId));
        const veiculosList = veiculosArea.map(v => `<li>${v.automovel} - R$ ${v.preco}</li>`).join('');


        const modal = document.getElementById('modal');
        const modalContent = modal.querySelector('.modal-content');

        modalContent.classList.remove('model')


        // Definir o conteúdo do modal com base no ID da área
        modalContent.innerHTML = ` <h3>Área ${areaId}</h3>
        <p>Veículo: ${veiculosList}</p>
        <p>Preço: R$ ${preco}</p>
        <button onclick="vender(${areaId})">Vender</button>
      `;

        // Exibir o modal
        modal.style.display = 'block';
    }
   

    areaDivs.forEach(div => {
        div.addEventListener('click', handleDivClick);
    });



    // Adicionar o evento onclick a cada div
    divs.forEach(div => {
        div.addEventListener('click', handleDivClick);
    });
    const areas = new Set();

    fetch('http://localhost:3000/alocacao')
        .then(response => response.json())
        .then(response => {
            response.forEach(a => {
                areas.add(a.area);
            });

            // Selecionar todas as divs
            const divs = document.querySelectorAll('div');

            // Verificar se a área está presente no conjunto de áreas filtradas e alterar a cor de fundo
            divs.forEach(div => {
                if (areas.has(parseInt(div.innerHTML))) {
                    div.style.backgroundColor = '#0000FF';
                }
            });
        });
        

    fetch('http://localhost:3000/auto')
        .then(response => response.json())
        .then(response => {
            const veiculos = response;

            // Adicionar o evento onclick a cada div de área
            areaDivs.forEach(div => {
                div.addEventListener('click', event => handleDivClick(event, veiculos));
            });
        });

    document.querySelector('main').appendChild(clone);


}

carregar();




