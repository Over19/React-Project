import React, {createContext, useEffect, useState } from "react";



export const cartContext = createContext ();
const { Provider } = cartContext;


const CartCustomProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);

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
            setProducts([...products, agregarProduct]);
        };
    }


    const borrarProduct = (id) => {
        setProducts(products.filter(products => products.id === id));
    };

    const IsInCart = (id) => {
        products.some(product => product.id === id)
    }

    const reset = () => {
        setProducts([]);
        setQtyProducts(0);
    }

    return (
        <Provider value= {{products, agregarProduct, qtyProducts, borrarProduct, reset}}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider