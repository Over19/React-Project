import Item from "./Item";

const ItemList = ({ productos }) => {
	return (
		<div className="todito">
			<div className="textContainer pt-2">
				<h2 className="neon">
					<span className="flicker-fast">O</span>ver
					<span className="flicker-slow">T</span>ech{" "}
					<span className="flicker-medium">S</span>tore
				</h2>
			</div>
			<div className="itemContainer">
				{productos.map((producto) => (
					<Item key={producto.id} producto={producto} />
				))}
			</div>
		</div>
	);
};

export default ItemList;
