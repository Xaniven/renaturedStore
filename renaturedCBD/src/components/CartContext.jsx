import { createContext, useState } from "react";
import { createCheckoutSession, getStripePayments } from "@stripe/firestore-stripe-payments";
import { app } from "./firebase";
export const CartContext = createContext();

export function CartProvider({ children }) {
  /////////////////CART FUNCTIONS///////////////////////////////
  const [cart, setCart] = useState(() => []);
  const [checkoutCart, setCheckoutCart] = useState(() => []);
  const [cartTotal, setCartTotal] = useState(0);

  function addToCart(checkoutObj, uiCart) {
    setCart((prevState) => [...prevState, uiCart]);
    setCheckoutCart((prevState) => [...prevState, checkoutObj]);

    setCartTotal(Number(uiCart.price) + Number(cartTotal));
  }
  function removeFromCart(key) {
    //copy cart state
    const newCart = cart;
    const newCheck = checkoutCart;
    //update total
    setCartTotal(Number(cartTotal) - Number(newCart[key].price));
    //remove items from state copy
    delete newCart[key];
    delete newCheck[key];
    //filter deleted items
    const newCheckout = newCheck.filter((empty) => {
      return newCheck[key] !== empty;
    });

    const updatedCart = newCart.filter((empty) => {
      return newCart[key] !== empty;
    });
    //set state to filtered copys
    setCart(updatedCart);
    setCheckoutCart(newCheckout);
  }

  /////////////////STRIPE FUNCTIONS///////////////////////////////

  const payments = getStripePayments(app, {
    productsCollection: "products",
    customersCollection: "customers",
  });

  async function checkoutSession(cart) {
    const session = await createCheckoutSession(payments, {
      mode: "payment",
      line_items: checkoutCart,
      success_url: "https://GOOGLE.COM",
      cancel_url: "https://BING.COM",
      expires_at: Math.floor(Date.now() / 1000) + 3600 * 2,
    });
    window.location.assign(session.url);
  }

  return (
    <CartContext.Provider value={{ cart, cartTotal, addToCart, removeFromCart, checkoutSession }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
