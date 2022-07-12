import { Link, NavLink } from "react-router-dom"
import React from "react"










const ItemDetail = ({ product2 }) => {

    return (
        <div class="col-sm-3 px-4 py-5">
            <div class="card text-center">
                <img src={product2.image} alt="foto producto" />
            </div>
            <div class="card-body">
                <h3 class="card-title">{product2.title}</h3>
                <h3 class="card-title">${product2.price}</h3>
                <p class="card-text fs-3">{product2.description} </p>
            </div>
            <button class="btn btn-dark mx-5">Agregar producto al carrito</button>
        </div>
            )  
    }




/* const styles = {
    infoContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    img: {
      width: "40%"
    },
    infoTextContainer: {
      display: "flex",
      flexDirection: "column",
    },
    infoText: {
      padding: "10px",
      marging: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    }
  };
 */

export default ItemDetail