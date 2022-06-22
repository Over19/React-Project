import logo from '../../Assets/logo.png'
import './Navbar.css'
import CartWidget from '../CartWidget'




const Navbar = () => {
    return (
        <>
        <img src={logo} alt="logo" />
        <h2> Tienda Online</h2>
        <nav>
        <a href="#">Productos 1</a>
        <a href="#">Productos 2</a>
        <a href="#">Productos 3</a>
        <a href="#">Productos 4</a>



        <CartWidget />
        </nav>


        
        </>
    )
}


export default Navbar