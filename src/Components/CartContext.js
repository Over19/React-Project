import React, {createContext, useEffect, useState } from "react";



export const cartContext = createContext ();
const { Provider } = cartContext;


const CartCustomProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);
    const [price, setPrice] = useState(0)

    console.log(products)
    const getProductsQty = () => {
        let qty = 0;
        products.forEach(product => {
            qty += product.qty;
        })
        setQtyProducts(qty);
    }

    useEffect (() => {
        getProductsQty();
    }, [products]);

    function agregarProduct(product) {
        if (IsInCart(product.id)) {
            const findProduct = products.find(p => p.id === product.id);
            const index = products.indexOf(findProduct);
            const aux = [...products];
            aux[index].qty += product.qty;
            setProducts(aux); 
        } else {
            setProducts([...products,{...product}]);
        };
    }


    const borrarProduct = (id) => {
        setProducts(products.filter(products => products.id === id));
    };

    const handlePrecio = (product) => {
        let precio = 0;
        products.map((product) => (precio += product.amount * product.price));
        setPrice(precio)
    }

    const IsInCart = (id) => {
        return products.some(product => product.id === id)
    }

    const reset = () => {
        setProducts([]);
        setQtyProducts(0);
    }

    return (
        <Provider value= {{products, agregarProduct, qtyProducts, borrarProduct, handlePrecio, reset}}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider