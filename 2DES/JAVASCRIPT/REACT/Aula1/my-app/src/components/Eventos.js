import Button from './eventos/Button.js'
function Evento({numero}) {

    function meuEvento(){
        console.log(`Ativando 1 evento`)
    }

    function segundo(){
        console.log('Ativando o seundo evento')
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text='Primeiro Evento'/>
            <Button event={segundo} text='Segundo Evento'/>
            {/* <button onClick={meuEvento}>Ativar</button> */}
        </div>
    )
}

export default Evento