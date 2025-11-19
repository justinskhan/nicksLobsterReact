import { createContext, useState } from "react";
export const CartContext = createContext();
export function CartProvider({ children }) 
{
  const [cart, setCart] = useState([]);

  const addToCart = (item) => { {/*func to add item */}
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);
      if (existing) {/* if already there increase quantity */}
      {
        return prev.map((cartItem) => 
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + (item.quantity || 1) } 
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }]; {/* if new add new section */}
    });
  };

  const updateQuantity = (id, delta) => { {/* for + and - functionality */}
    setCart((prev) => {
      return prev
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: Math.max((cartItem.quantity || 1) + delta, 0) }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
