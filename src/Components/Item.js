import ItemCounter from "./ItemCounter"




const Item = ({product}) => {

    return (
        <div class="col-sm-3 px-4 py-5">
            <div class="card text-center">
                <img src="{product.image} " alt="{product.title}" />
            </div>
            <div class="card-body">
                <h3 class="card-title">{product.title}</h3>
                <p class="card-text fs-3">${product.price}</p>
            </div>
            <button class="btn btn-dark mx-5">Ver detalles del producto</button>
            <ItemCounter />

        </div>
        

    )
}


export default Item