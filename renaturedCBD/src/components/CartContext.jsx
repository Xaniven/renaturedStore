import { createContext, useState } from "react";
import { createCheckoutSession, getStripePayments } from "@stripe/firestore-stripe-payments";
import { app } from "./firebase";
export const CartContext = createContext();

export function CartProvider({ children }) {
  /////////////////CART FUNCTIONS///////////////////////////////
  const [cart, setCart] = useState(() => []);

  function addToCart(cartItem) {
    setCart((prevState) => [...prevState, cartItem]);
  }

  /////////////////STRIPE FUNCTIONS///////////////////////////////

  const payments = getStripePayments(app, {
    productsCollection: "products",
    customersCollection: "customers",
  });

  async function checkoutSession(cart) {
    const session = await createCheckoutSession(payments, {
      mode: "payment",
      line_items: cart,
      success_url: "https://GOOGLE.COM",
      cancel_url: "https://BING.COM",
    });
    window.location.assign(session.url);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, checkoutSession }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
