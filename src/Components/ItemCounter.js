import { useState } from "react"



const ItemCounter = ({initial, onAdd, stock}) =>  {

const [count, setCount] = useState(1)

const clickSumar = () => {
    if (count < stock) {
        setCount(count + 1);
    }
}

const clickRestar = () => {
    if (count > 1) {
        setCount(count - 1);
    }
}

const addToCart = () => {
    onAdd(count)
}


/*     return (
        <>
        <div className="counter">
            <button onClick={restar}>-</button>
            <h4>{cuenta}</h4>
            <button onClick={sumar}>+</button>
            <button onClick={onAdd}>Comprar</button>
        </div>
        
</>
    )
} */


return (
    <div style={styles.container}>
        <div style={styles.containerButtons}>
            <button style={styles.button} onClick={() => clickRestar()}>-</button>
            <h2>{count}</h2>
            <button style={styles.button} onClick={() => clickSumar()}>+</button>
        </div>
        <button style={styles.buttonAdd} onClick={() => addToCart()}>Agregar al carrito</button>
    </div>
);
}
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px'
    },
    button: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "black",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        margin: "10px",
    },
    containerButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonAdd: {
        width: "30%",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "blue",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
    }

}
export default ItemCounter 