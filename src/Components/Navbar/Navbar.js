import logo from '../../Assets/logo.png'
import './Navbar.css'
import CartWidget from '../CartWidget'
import { colors } from '@mui/material';
import { Link, NavLink } from "react-router-dom"


const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}



const Navbar = () => {
// CAMBIAR ACA LAS CATEGORIAS
    const categorias = [
        {name: "Teclados", id: 0, route:"/category/Teclados"},
        {name: "Auriculares", id: 1, route:"/category/Auriculares"},
        {name: "men's clothing", id: 2, route:"/category/men's clothing"},
        {name: "women's clothings", id: 3, route:"/category/women's clothing"},
    ];

    return (
        <header style={styles.container}>
            {/* <div style={styles.branchContainer}>
                <Link to="/"><img style={styles.logo} src={logo} alt="" /></Link>
                
            </div> */}

            <div style={styles.links}>
                <nav>
                <Link to="/"><img style={styles.logo} src={logo} alt="" /></Link>
                    {categorias.map((category)=> <NavLink key={category.id} style={styles.link} to={category.route}>{category.name}</NavLink> )}
                    <Link to="/cart"><CartWidget /></Link>
                </nav>
                {/* <Link to="/cart"><CartWidget /></Link> */}
            </div>
        </header>
        )
}

const styles = {
    container: {
        display: viewport.width > 900 ? 'flex' : 'none',
        justfifyContent: "space-between",
        alignItems: "center",
        width: "100%"
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
        display: "flex"
    },
    link: {
        fontSize: 16,
        padding: 20
    },
    logo: {
        height: 80
    }
}


export default Navbar