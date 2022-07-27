import React, {useState, useContext} from "react";
import { db } from "../FireBase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import { cartContext } from "./CartContext";



const Checkout = () => {
    const { products } = useContext(cartContext);

    const [buyer, setBuyer] = useState({
        nombre:'',
        apellido:'',
        email:'',
    })

    const createBuyer = ({target}) => {
        setBuyer({
            ...buyer,
            [target.name] : target.value
        })
    }

    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i].price * products[i].qty;
    } 

    /* const buyerData = {
        nombre:'',
        apellido:'',
        email:'',
    } */

    const finalizarCompra = () => {
        const ventasCollection = collection(db, 'Ventas');
        addDoc(ventasCollection,{
            buyer,
            items: products,
            date: serverTimestamp(),
            total: total


        })
        
    }




    return (
        <div>
            <center>
                <h3 className="p-3 mb-2 bg-success mt-4">Ingresa tus datos</h3>
                <form onSubmit={finalizarCompra} className="w-75 p-3">
                    <label>Nombre</label>
                    <input onChange={createBuyer} type="text" name="nombre" className="form-control" required></input>
                    <label>Apellido</label>
                    <input onChange={createBuyer} type="text" name="apellido" className="form-control" required></input>
                    <label>email</label>
                    <input onChange={createBuyer} type="email" name="email" className="form-control" required></input>

                    <submit className="form-submit btn btn-primary mt-2" onClick={finalizarCompra}>Termina tu Compra</submit>
                </form>
            </center>
        </div>
    )
}



export default Checkout