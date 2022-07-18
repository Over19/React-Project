import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { cartContext } from './CartContext';
import { green } from '@mui/material/colors';


const CartWidget = () => {

    const {qtyProducts} = useContext(cartContext)


    return (
        <button>
        <ShoppingCartIcon sx= {{ color: green[400], fontSize: 30, marginLeft: 1, marginRight: 1,}} />
        <p>{qtyProducts}</p>

        </button>
    )
}

export default CartWidget