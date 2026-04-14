import { useEffect, useState } from "react";
import type { CartItem, Product } from "../types";

export const useCart = () => {
    
    const [cart, setCart] = useState<CartItem[]>( () => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    } );



    useEffect(() => {
        
        localStorage.setItem("cart", JSON.stringify(cart));

    }, [cart])






    const addToCart = (product: Product)=>{

        const exists = cart.find( (item) => item.id === product.id);

        if(exists){
            setCart(cart.map( (item) => item.id === product.id && item.amount < product.stock ? {...item, amount: item.amount + 1} : item ));
            
        }else{
            setCart([...cart, { id: product.id, name: product.name, price: product.price, amount: 1 } ]);
        }

    }

    const removeFromCart = (id: number)=>{
        setCart( cart.filter( (item) => item.id !== id ) );
    }

    const clearCart = () => {
        setCart([]);
    }

    return{
        cart, 

        addToCart,
        removeFromCart, 
        clearCart
    }
}
