import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useParams } from "react-router-dom";
import { db } from "../../FireBase/firebase";
import { getDoc, collection, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
	const [product2, setProduct2] = useState({});
	const [loading, setLoading] = useState(true);

	const { productId } = useParams();

	useEffect(() => {
		const productCollection = collection(db, "Coleccion 1");
		const refDoc = doc(productCollection, productId);
		getDoc(refDoc)
			.then((result) => {
				const product = {
					id: result.id,
					...result.data(),
				};
				setProduct2(product);
			})
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}, [productId]);

	return (
		<>
			{loading ? (
				<PacmanLoader color="#1fd8c7" size={30} speedMultiplier={3} />
			) : (
				<ItemDetail product2={product2} />
			)}
		</>
	);
};

export default ItemDetailContainer;
