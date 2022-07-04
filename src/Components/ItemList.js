
import { useState,useEffect } from "react"
import PacmanLoader from "react-spinners/PacmanLoader"







const ItemList = ({item}) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    
    useEffect(() => {
        const getProductos = async () => {
            try {
                const response = await fetch ('https://fakestoreapi.com/products/category/electronics');
                const data = await response.json();
                setProductos(data);
            }
            catch (err) {
                setError(true)
            }
            finally {
                setLoading(false)
                
            }    
        }
        
        getProductos();
    }, []);

return (
        <>
        {loading ? <PacmanLoader
  color="#1fd8c7"
  size={30}
  speedMultiplier={3}
/> :
        error ? <p>Error :/</p> 
        :<ul>{productos.map(producto => <li key={producto.id}>{producto.title}-{producto.price}-{producto.description}-{producto.image}</li> )} </ul> }
        </>
    )    
}


export default ItemList