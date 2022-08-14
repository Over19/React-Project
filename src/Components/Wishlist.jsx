import React, { useContext } from "react";
import { cartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Wishlist = () => {
	const { savedProducts } = useContext(cartContext);

	return (
		<div className="todito">
			<div className="textContainer pt-2">
				<h2 className="neon">Wishlist</h2>
			</div>
			<div className="wishlistBg">
				{savedProducts.map((el) => (
					<div className="card">
						<img className="fotito" src={el.image} alt="" />
						<div className="card-body">
							<h3 className="card-title">{el.title} </h3>
							<h4>${el.price}</h4>
						</div>
						<div>
							<Link to={`/product/${el.id}`}>
								<button className="detallesProd">Ir al Producto</button>{" "}
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Wishlist;
