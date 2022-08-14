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

	const [orderId, setOrderId] = useState(null);

	const [buyer, setBuyer] = useState(form);

	const getBuyer = (e) => {
		const { name, value } = e.target;
		setBuyer({ ...buyer, [name]: value });
	};

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
					<h2>El ID de tu orden es {orderId}</h2>
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
				<h3 className="p-3 mb-2 mt-4">Ingresa tus datos</h3>
				<form onSubmit={saveBuyer} className="w-50 p-3 space-y-4">
					<div className="inputBox">
						<input
							onChange={getBuyer}
							type="text"
							name="name"
							className="form-control"
							required
						></input>
						<span>Nombre</span>
					</div>

					<div className="inputBox">
						<input
							onChange={getBuyer}
							type="number"
							name="phone"
							className="form-control"
							required
						></input>
						<span>Telefono</span>
					</div>
					<div className="inputBox">
						<input
							onChange={getBuyer}
							type="email"
							name="email"
							className="form-control"
							required
						></input>
						<span>Email</span>
					</div>

					<button className="form-submit">Termina tu Compra.</button>
				</form>
			</center>
		</div>
	);
};

export default Checkout;
