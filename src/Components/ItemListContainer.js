import { useEffect, useState } from "react";
import ItemCounter from "./ItemCounter"
import ItemList from "./ItemList"
import { PacmanLoader } from "react-spinners";
import { useParams } from "react-router-dom";







export const ItemListContainer = ({texto}) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} =useParams();


    useEffect(() => {
        const URL = categoryId 
        ? `https://fakestoreapi.com/products/category/${categoryId}`
        : 'https://fakestoreapi.com/products'
        fetch (URL)
        .then(res =>res.json())
        .then(data => setProductos(data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [categoryId]);
    



    return (
        <>
        <h2>{texto}</h2>
        {loading ? <PacmanLoader
  color="#1fd8c7"
  size={30}
  speedMultiplier={3}
/>: <ItemList productos={productos} />  }
</>
  )
}
        

       /*  <ItemCounter stock={10} /> */
        
        
    



export default ItemListContainer
