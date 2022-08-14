import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { PacmanLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { db } from "../FireBase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = ({ texto }) => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);

	const { categoryId } = useParams();

	useEffect(() => {
		const q = categoryId
			? query(
					collection(db, "Coleccion 1"),
					where("category", "==", `${categoryId}`)
			  )
			: collection(db, "Coleccion 1");

		getDocs(q).then((result) => {
			const list = result.docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data(),
				};
			});

			setProductos(list);
			setLoading(false);
		});
	}, [categoryId]);

	return (
		<>
			{loading ? (
				<PacmanLoader color="#1fd8c7" size={30} speedMultiplier={3} />
			) : (
				<ItemList productos={productos} />
			)}
		</>
	);
};

export default ItemListContainer;
