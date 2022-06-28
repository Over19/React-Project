import { useState } from "react"



const ItemCounter = ({stock}) =>  {

const [cuenta, setCuenta] = useState(2)

const sumar = () => {
    cuenta < stock && setCuenta(cuenta + 1)
    cuenta >= stock && alert('No hay stock')
}

const restar = () => {
    cuenta > 2 && setCuenta(cuenta - 1)
}


    return (
        <>
        <div className="counter">
            <button onClick={restar}>-</button>
            <h4>{cuenta}</h4>
            <button onClick={sumar}>+</button>
        </div>
        
</>

    )
}

export default ItemCounter 