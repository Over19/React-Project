import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
	const { products, reset, price } = useContext(cartContext);

	return (
		<div className="container">
			<h4>Tu Carrito</h4>
			{products.map((product, key) => (
				<ItemCart key={key} product={product} />
			))}
			{products.length === 0 ? (
				<div>
					<h4>No hay nada en el carrito</h4>
					<button>
						<Link to="/">Home</Link>
					</button>
				</div>
			) : (
				<>
					<li className="list-group-item d-flex justify-content-between align-items-center mt-4">
						Total a pagar
						<span className="badge bg-primary rounded-pill">${price} </span>
					</li>
					<button className="vaciarCartButton" onClick={reset}>
						Vaciar Carrito
					</button>
					<button>
						<Link className="finalizarButton" to="/Checkout">
							Finalizar Compra
						</Link>
					</button>
				</>
			)}
		</div>
	);
};

export default Cart;
