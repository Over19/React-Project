import { Link, } from "react-router-dom"





const Item = ({producto}) => {

    return (
    <div className="card">
            <img className="fotito" src={producto.image} alt="" />    
        <div className="card-body">
        <h3 className="card-title">{producto.title} </h3>
        <h4>${producto.price}</h4>
        </div>
        <div>
            <Link to={`/product/${producto.id}`}><button> Ver mas detalles del Producto</button> </Link>
        </div>
    </div>
)
}



export default Item 