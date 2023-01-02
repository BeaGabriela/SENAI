import {useState} from 'react'

function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState('')

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(){
        setUserEmail('')
        
    }

    


    return(
        <div>
            <h2>Cadastre seu email:</h2>
            <form>
                <input type='text' placeholder='Digite o seu email.' onChange={(e) => setEmail(e.target.value)}/>
                <button type='submit' onClick={enviarEmail}>Enviar Email</button>
                {userEmail && (
                    <div>
                        <p>O email do user é: {userEmail}</p>
                        <button type='submit'  onClick={limparEmail}>limpar Email</button>
                    </div>
                )}
            </form>
            
        </div>
    )
}

export default Condicional