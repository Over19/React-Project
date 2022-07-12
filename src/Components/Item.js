import ItemCounter from "./ItemCounter"
import { Card } from "react-bootstrap"
import Button from "react-bootstrap/esm/Button"
import { Link, NavLink } from "react-router-dom"





const Item = ({producto}) => {

    return (
    <div className="card">
            <img className="fotito" src={producto.image} alt="" />    
        <div className="card-body">
        <h3 className="card-title">{producto.title} </h3>
        <p className="card-text text-secondary">{producto.description}</p>
        </div>
        <div>
            <Link to={`/product/${producto.id}`}><button> Ver mas detalles del Producto</button> </Link>
        </div>
    </div>
)
}



export default Item 