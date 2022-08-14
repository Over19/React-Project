import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/Itemdetails/ItemDetailContainer";
import CartCustomProvider from "./Components/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Wishlist from "./Components/Wishlist";

const App = () => {
	return (
		<BrowserRouter>
			<CartCustomProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<ItemListContainer texto="Bienvenido" />} />
					<Route
						path="/category/:categoryId"
						element={<ItemListContainer texto="Bienvenido" />}
					/>
					<Route path="/product/:productId" element={<ItemDetailContainer />} />
					<Route path="/Cart" element={<Cart />} />
					<Route path="/Checkout" element={<Checkout />} />
					<Route path="/Wishlist" element={<Wishlist />} />
				</Routes>
			</CartCustomProvider>
		</BrowserRouter>
	);
};

export default App;
