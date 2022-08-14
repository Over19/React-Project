import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import ItemCounter from "../ItemCounter";
import { cartContext } from "../CartContext";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ItemDetail = ({ product2 }) => {
	const [finalized, setFinalized] = useState(false);
	const {
		agregarProduct,
		agregarSaveProduct,
		isInSavedProducts,
		eliminarSavedProduct,
	} = useContext(cartContext);

	const onAdd = (contador) => {
		agregarProduct({ ...product2, qty: contador });

		setFinalized(true);
	};

	return (
		<div className="infoContainer">
			<img style={styles.img} src={product2.image} alt={product2.title} />
			<div className="infoTextContainer">
				<div style={styles.infoText}>
					<h1 className="producTitle">{product2.title}</h1>
					<span className="productPrice">${product2.price}</span>
					<p className="productDescript">{product2.description}</p>
				</div>

				{!finalized ? (
					<ItemCounter onAdd={onAdd} stock={50} initial={1} />
				) : (
					<Link className="cartButton" to="/cart">
						<button>Ir al Carrito</button>
					</Link>
				)}
				{isInSavedProducts(product2.id) ? (
					<button
						className="delFavButton"
						onClick={() => eliminarSavedProduct(product2.id)}
					>
						Eliminar de favoritos
					</button>
				) : (
					<button
						className="addFavButton"
						onClick={() => agregarSaveProduct(product2)}
					>
						Agregar a Favoritos <FavoriteIcon />
					</button>
				)}
			</div>
		</div>
	);
};

const styles = {
	infoContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	img: {
		width: "30%",
		border: "3px solid #ffffff",
		marginRight: "10px",
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
		justifyContent: "space-around",
		border: "2px solid #ffffff",
	},
};

export default ItemDetail;
