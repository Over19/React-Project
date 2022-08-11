import React, { useState, useContext } from "react";
import { db } from "../FireBase/firebase";
import {
	collection,
	addDoc,
	serverTimestamp,
	getDocs,
	query,
	orderBy,
} from "firebase/firestore";
import { cartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
	const { products, reset } = useContext(cartContext);

	const form = {
		name: "",
		email: "",
		phone: "",
		address: "",
	};

	const [buyer, setBuyer] = useState(form);

	const getBuyer = (e) => {
		const { name, value } = e.target;
		setBuyer({ ...buyer, [name]: value });
	};

	const [orderId, setOrderId] = useState(null);

	let total = 0;
	for (let i = 0; i < products.length; i++) {
		total += products[i].price * products[i].qty;
	}

	const saveBuyer = async (e) => {
		e.preventDefault();
		try {
			await addDoc(collection(db, "Ventas"), {
				...buyer,
				items: products,
				date: serverTimestamp(),
				total: total,
			});

			const q = query(collection(db, "Ventas"), orderBy("date"));

			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				setOrderId(doc.id);
			});

			reset();
		} catch (error) {
			console.log(error);
		}
		setBuyer({ ...form });
	};

	if (orderId) {
		return (
			<>
				<div className="py-5 text-center mt-5">
					<h3 className="mt-5">Gracias por confiar en nosotros!</h3>
					<h4 className="mt-5">Tu compra se realizo exitosamente.</h4>
					<h2>El iD de tu orden es {orderId}</h2>
					<Link to={`/`}>
						<button className="btn btn-outline-primary">Volver al Home</button>
					</Link>
				</div>
			</>
		);
	}

	return (
		<div>
			<center>
				<h3 className="p-3 mb-2 bg-success mt-4">Ingresa tus datos</h3>
				<form onSubmit={saveBuyer} className="w-75 p-3">
					<input
						onChange={getBuyer}
						type="text"
						name="name"
						className="form-control"
						placeholder="Nombre"
						required
					></input>

					<input
						onChange={getBuyer}
						type="number"
						name="phone"
						className="form-control"
						placeholder="Telefono"
						required
					></input>

					<input
						onChange={getBuyer}
						type="email"
						name="email"
						className="form-control"
						placeholder="Email"
						required
					></input>

					<input
						onChange={getBuyer}
						type="text"
						name="address"
						className="form-control"
						placeholder="Direccion"
						required
					></input>
					<button className="form-submit">Termina tu Compra.</button>
				</form>
			</center>
		</div>
	);
};

export default Checkout;
