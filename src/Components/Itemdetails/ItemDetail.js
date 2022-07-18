import { Link, } from "react-router-dom"
import React, { useState, useContext } from "react"
import ItemCounter from "../ItemCounter"
import { cartContext } from "../CartContext";




const ItemDetail = ({ product2 }) => {

  const [finalized, setFinalized] = useState(false);
  const { agregarProduct } = useContext(cartContext);

  const onAdd = (contador) => {
    agregarProduct({...product2, qty: contador});
    console.log(`Hay ${contador} productos en el carrito`);
    setFinalized(true)
  }

    /* return (
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
    } */


    return (
      <div style={styles.infoContainer}>
        <img style={styles.img} src={product2.image} alt={product2.title} />
        <div style={styles.infoTextContainer}>
          <div style={styles.infoText}>
            <h1>{product2.title}</h1>
            <span>${product2.price}</span>
            <p>{product2.description}</p>
          </div>
  
        {!finalized ? (
          <ItemCounter onAdd={onAdd} stock={15} initial={1} />
        ) : (
          <Link to="/cart">
            <button>Ir al Carrito</button>
          </Link>
        )
        }
        </div>
      </div>
    );
  };

const styles = {
    infoContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    img: {
      width: "30%"
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
 

export default ItemDetail