function Form(){

    function cadastrarUser(e){
        e.preventDefault()
        console.log('Cadastrou o uyser')
    }
    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <input type='text' placeholder='Digite seu nome'/>
                </div>
                <div>
                    <input type='submit' value='Cadastrar'/>
                </div>
            </form>
        </div>
    )
}

export default Form