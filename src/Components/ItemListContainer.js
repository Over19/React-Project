import ItemCounter from "./ItemCounter"


const ItemListContainer = ({textoRandom}) => {
    return (
        <>
        <h2>{textoRandom}</h2>

        <ItemCounter stock={10} />
        </>
    )
}


export default ItemListContainer
