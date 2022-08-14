import logo from "../../Assets/logo.png";
import "./Navbar.css";
import CartWidget from "../CartWidget";
import { Link, NavLink } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const viewport = {
	width: document.documentElement.clientWidth,
	height: document.documentElement.clientHeight,
};

const Navbar = () => {
	const categorias = [
		{ name: "Teclados", id: 0, route: "/category/Teclados" },
		{ name: "Auriculares", id: 1, route: "/category/Auriculares" },
		{ name: "Mouse", id: 2, route: "/category/Mouse" },
		{ name: "Monitores", id: 3, route: "/category/Monitores" },
	];

	return (
		<header style={styles.container}>
			<div style={styles.links}>
				<nav>
					<Link to="/">
						<img style={styles.logo} src={logo} alt="" />
					</Link>
					{categorias.map((category) => (
						<NavLink className="navLinks" key={category.id} to={category.route}>
							{category.name}
						</NavLink>
					))}
					<Link className="wishButton" to="/Wishlist">
						Wishlist
						<FavoriteIcon />
					</Link>
					<Link to="/cart">
						<CartWidget />
					</Link>
				</nav>
			</div>
		</header>
	);
};

const styles = {
	container: {
		display: viewport.width > 900 ? "flex" : "none",
		justfifyContent: "space-between",
		alignItems: "center",
		width: "100%",
	},
	branchContainer: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	title: {
		fontSize: 25,
	},
	links: {
		display: "flex",
	},
	link: {
		color: "#ffffff",
		fontSize: 16,
		padding: 10,
		textDecoration: "none",
		borderWidth: "1px",
		background: "#3d94f6",
		borderColor: "#3d94f6",
		borderRadius: "10%",
	},
	logo: {
		height: 80,
	},
};

export default Navbar;
