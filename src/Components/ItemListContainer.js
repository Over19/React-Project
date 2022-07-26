import { useEffect, useState } from "react";
import ItemCounter from "./ItemCounter"
import ItemList from "./ItemList"
import { PacmanLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { db } from "../FireBase/firebase"; 
import { getDocs, collection, query, where} from "firebase/firestore"







export const ItemListContainer = ({texto}) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} =useParams();

    


    useEffect(() => {

      const q = categoryId
      ? query(collection(db, 'Coleccion 1'), where('category', '==', `${categoryId}`))
      : collection(db, 'Coleccion 1')

      /* const productCollection = collection(db,'Coleccion 1');
      const q = query(productCollection, where("category", "==", `${categoryId}`));
      let useQ = {}

      categoryId ? useQ = q : useQ = productCollection */

      getDocs(q)
      .then(result => {
        const list = result.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })

        setProductos(list);
        setLoading(false)
      })

      
        /* const URL = categoryId 
        ? `https://fakestoreapi.com/products/category/${categoryId}`
        : 'https://fakestoreapi.com/products'
        fetch (URL)
        .then(res =>res.json())
        .then(data => setProductos(data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false)) */
    }, [categoryId]);
    



    return (
        <>
        
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
