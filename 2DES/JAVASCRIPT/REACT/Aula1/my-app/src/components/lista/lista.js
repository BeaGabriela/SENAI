function OutraLista({itens}){
     return (
     <>
        <h3>Lista de coisas boas</h3>
        {
            itens.lenght> 0 ? (
            itens.map((item, index) => {
                return(
                    <p key={index}>{item}</p>
                )
            })) : (
                <p>Não há itens na lista.</p>
            )
        }
     </>
     )
}

export default OutraLista