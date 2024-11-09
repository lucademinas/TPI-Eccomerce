import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, {...product, quantity: 1}]);
    }

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== id));
    }

    const increaseQuantity = (productId) => {
        setCart((prevCart) => 
            prevCart.map((product) => product.id === productId
        ? {...product, quantity: product.quantity + 1} : product))
    }

    const decreaseQuantity = (productId) => {
        setCart((prevCart) => 
            prevCart.map((product) => product.id === productId
        ? {...product, quantity: product.quantity - 1 < 1 ? product.quantity = 1 : product.quantity - 1} : product))
    }

    const emptyCart=()=>{
        setCart([])
    }
    

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity,emptyCart}}>
            {children}
        </CartContext.Provider>
    )

}