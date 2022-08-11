import React, { useContext } from "react";
import { cartContext } from "./CartContext";





const ItemCart = ({product}) => {


    const {borrarProduct} = useContext(cartContext)



    return (
        <div>

            
            <ul className="list-group mt-2">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    {product.title}
                    <span className="badge bg-primary rounded-pill">{product.qty}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Precio: ${product.price}
                </li>
                <button onClick={() => borrarProduct(product.id)} className="btn btn-primary">
                    Eliminar Item
                </button>
            </ul>
        </div>
    )
}


export default ItemCart;