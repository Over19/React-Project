import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import PacmanLoader from "react-spinners/PacmanLoader"






export const ItemDetailContainer = ({}) => {
    const [product2, setProduct2] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(() => {
        const getProducto = async () => {
            try {
                const response = await fetch ('https://fakestoreapi.com/products/14');
                const data = await response.json();
                setProduct2(data);
            }
            catch (err) {
                setError(true)
            }
            finally {
                setTimeout(() => setLoading(false), 2000)
                
            }    
        }
        
        getProducto();
    }, []);


    return (
        <>
        {
            loading ? <PacmanLoader
            color="#1fd8c7"
            size={30}
            speedMultiplier={3}
        /> :
        <ItemDetail
        producto = {product2} />}


        </>
        
        

        



    )
    
    
}

export default ItemDetailContainer
