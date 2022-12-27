import Item from './Item2'
function List(){
    return (
        <>
        <div>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Sei la' lancamento = {10}/>
                <Item marca='nobel' lancamento = {5}/>
                <Item marca='ahhhhhhhh' lancamento = {56}/> 
                <Item /> 

            </ul>
        </div>
        </>
    )
    
}

export default List