import { useState } from "react"



const ItemCounter = ({stock}) =>  {

const [cuenta, setCuenta] = useState(1)

const sumar = () => {
    cuenta < stock && setCuenta(cuenta + 1)
    cuenta >= stock && alert('No hay stock')
}

const restar = () => {
    cuenta > 1 && setCuenta(cuenta - 1)
}

const onAdd = () => {
    alert(`Gracias por tu compra de ${cuenta} productos`)
}


    return (
        <>
        <div className="counter">
            <button onClick={restar}>-</button>
            <h4>{cuenta}</h4>
            <button onClick={sumar}>+</button>
            <button onClick={onAdd}>Comprar</button>
        </div>
        
</>

    )
}

export default ItemCounter 