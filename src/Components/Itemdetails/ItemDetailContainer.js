import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import PacmanLoader from "react-spinners/PacmanLoader"
import { useParams } from "react-router-dom"






export const ItemDetailContainer = () => {
    const [product2, setProduct2] = useState({})
    const [loading, setLoading] = useState(true)
    

    const { productId } = useParams ();


    useEffect(() => {
        
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct2(data))
        .finally (() => setLoading(false))
        
    }, [productId])
    

    return (
        <>
        {
            loading ? <PacmanLoader
            color="#1fd8c7"
            size={30}
            speedMultiplier={3}
        /> :
        <ItemDetail 
         product2= {product2} />}


        </>
        
        

        



    )
    
    
}

export default ItemDetailContainer
