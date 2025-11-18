import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) 
{
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // simple version: just push new item each time
    setCart((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}