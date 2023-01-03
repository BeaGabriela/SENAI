function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        return(`Ola, ${algumNome}, tudo certo?`)
    }

    return(
        <div>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </div>
    )
}

export default Saudacao