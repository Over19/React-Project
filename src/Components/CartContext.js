import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [qtyProducts, setQtyProducts] = useState(0);
	const [price, setPrice] = useState(0);
	const [savedProducts, setSavedProducts] = useState([]);

	console.log(savedProducts);

	const getProductsQty = () => {
		let qty = 0;
		products.forEach((product) => {
			qty += product.qty;
		});
		setQtyProducts(qty);
	};

	useEffect(() => {
		getProductsQty();
		handlePrecio();
	}, [products]);

	/* WISHLIST */

	function agregarSaveProduct(product) {
		setSavedProducts([...savedProducts, product]);
	}

	const isInSavedProducts = (id) => {
		return savedProducts.some((product) => product.id === id);
	};

	const eliminarSavedProduct = (id) => {
		setSavedProducts(savedProducts.filter((product) => product.id !== id));
	};

	function agregarProduct(product) {
		if (IsInCart(product.id)) {
			const findProduct = products.find((p) => p.id === product.id);
			const index = products.indexOf(findProduct);
			const aux = [...products];
			aux[index].qty += product.qty;
			setProducts(aux);
		} else {
			setProducts([...products, { ...product }]);
		}
	}

	const borrarProduct = (id) => {
		setProducts(products.filter((product) => product.id !== id));
	};

	const handlePrecio = (product) => {
		let precio = 0;
		products.forEach((product) => (precio += product.qty * product.price));
		setPrice(precio);
	};

	const IsInCart = (id) => {
		return products.some((product) => product.id === id);
	};

	const reset = () => {
		setProducts([]);
		setQtyProducts(0);
	};

	return (
		<Provider
			value={{
				products,
				agregarProduct,
				qtyProducts,
				borrarProduct,
				handlePrecio,
				reset,
				price,
				agregarSaveProduct,
				savedProducts,
				isInSavedProducts,
				eliminarSavedProduct,
			}}
		>
			{children}
		</Provider>
	);
};

export default CartCustomProvider;
