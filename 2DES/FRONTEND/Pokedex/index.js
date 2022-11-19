const nomePoke = document.querySelector('.nome_poke')
const numero_poke = document.querySelector('.numero_poke')
const imgpo = document.querySelector('.pokemon_i')

const img = document.querySelector('.pokemon_imagem')
var nomeP = document.querySelector('.nome')
var numeroP = document.querySelector('.numero')



const input = document.querySelector('.input_pesquisa')

const form = document.querySelector('.form')

const btPre = document.querySelector('.btn-prev')
const btNext = document.querySelector('.btn-next')

const descrever = document.querySelector('#descrever')

var habilidades = document.querySelector('.descricao')

var modelo = document.querySelector('.model')
var modelo1 = document.querySelector('.modelo')

var fechar = document.querySelector('.fecharModal')

let pokemonn = 1

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIResponse.status === 200) {
        const data = await APIResponse.json()
        return data
    }
}

const direcionandoPokemon = async (pokemon) => {

    nomePoke.innerHTML = 'Carregando...'
    numero_poke.innerHTML = ''

    const data = await fetchPokemon(pokemon)
    console.log(data)
    if (data) {
        imgpo.style.display = 'block'
        nomePoke.innerHTML = data.name
        numero_poke.innerHTML = data.id
        pokemonn = data.id
        imgpo.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        input.value = ''
        

        habilidades.addEventListener('click', () => {
            modelo.classList.remove('modal')
            modelo1.classList.remove('modal')
            img.style.display = 'block'
            
            img.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
            nomeP.innerHTML = data.name
            numeroP.innerHTML = data.id
            

            descrever.innerHTML = data.moves.map(i => {
                i.move.name 
                return i.move.name + '<br>'
            })
        
        })

    } else {
        nomePoke.innerHTML = 'Não encontrado :c'
        numero_poke.innerHTML = ''
        imgpo.style.display = 'none'
    }
}



fechar.addEventListener('click', () => {
    modelo.classList.add('modal')
    modelo1.classList.add('modal')

})


form.addEventListener('submit', (event) => {
    event.preventDefault()

    direcionandoPokemon(input.value.toLowerCase())


})

btPre.addEventListener('click', () => {
    if (pokemonn > 1) {
        pokemonn -= 1
        direcionandoPokemon(pokemonn)
    }

})

btNext.addEventListener('click', () => {
    pokemonn += 1
    direcionandoPokemon(pokemonn)

})

direcionandoPokemon(1)


