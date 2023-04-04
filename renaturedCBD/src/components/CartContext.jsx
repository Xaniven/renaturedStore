import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  /////////////////CART FUNCTIONS///////////////////////////////
  const [cart, setCart] = useState(() => []);

  function addToCart(cartItem) {
    setCart((prevState) => [...prevState, cartItem]);
  }

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
}

export default CartContext;
