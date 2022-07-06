import { useEffect, useState } from "react";
import ItemCounter from "./ItemCounter"
import ItemList from "./ItemList"







const ItemListContainer = ({textoRandom}) => {



    return (
        <>
        <h2>{textoRandom}</h2>

        <ItemList />

        <ItemCounter stock={10} />
        
        </>
    )
}


export default ItemListContainer
