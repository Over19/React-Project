
import { useState,useEffect } from "react"
import PacmanLoader from "react-spinners/PacmanLoader"
import Item from "./Item"



const styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
    }
}



const ItemList = ({productos}) => {

return (
    <div className="itemContainer">
        {/* <div className="textContainer">
            <h2 className="neonText">OverTech Store</h2>
        </div> */}
    
        {productos.map((producto) => (
            <Item key={producto.id} producto={producto} />
        ))}
           </div>
        
       
        
    )    
}


export default ItemList