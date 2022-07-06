










const ItemDetail = ({ producto }) => {

    return (
        <div class="col-sm-3 px-4 py-5">
            <div class="card text-center">
                <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt="{producto.title}" />
            </div>
            <div class="card-body">
                <h3 class="card-title">{producto.title}</h3>
                <h3 class="card-title">${producto.price}</h3>
                <p class="card-text fs-3">{producto.description} </p>
            </div>
            <button class="btn btn-dark mx-5">Ver detalles del producto</button>
            

        </div>
        

    )
}



export default ItemDetail