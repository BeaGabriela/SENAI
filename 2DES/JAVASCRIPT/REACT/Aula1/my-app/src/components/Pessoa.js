function Pessoa({nome, idade, profissao, foto}){
    return(
        <div>
            {/* Forma mais "facil" porém grande. */}
            {/* <img src={props.foto} alt={props.nome}/>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p> */}

            {/* Forma menor, porém maior nos parametros */}
              <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>

    )
}

export default Pessoa