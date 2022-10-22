const nomePoke = document.querySelector('.nome_poke')
const numero_poke = document.querySelector('.numero_poke')
const imgpo = document.querySelector('.pokemon_i')

const input = document.querySelector('.input_pesquisa')

const form = document.querySelector('.form')

const btPre = document.querySelector('.btn-prev')
const btNext = document.querySelector('.btn-next')

let pokemon = 1

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
    if (data) {
        imgpo.style.display = 'block'
        nomePoke.innerHTML = data.name
        numero_poke.innerHTML = data.id
        imgpo.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        input.value = ''
        pokemon = data.id
        
    } else {
        nomePoke.innerHTML = 'Não encontrado :c'
        numero_poke.innerHTML = ''
        imgpo.style.display = 'none'
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    direcionandoPokemon(input.value.toLowerCase())
  

})

btPre.addEventListener('click', () => {
    if (pokemon > 1) {
        pokemon -= 1
        direcionandoPokemon(pokemon)
    }

})

btNext.addEventListener('click', () => {
    pokemon += 1
    direcionandoPokemon(pokemon)

})

direcionandoPokemon(1)