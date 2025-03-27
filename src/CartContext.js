import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderSummary, setOrderSummary] = useState(null);

  const addToCart = (newItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.id === newItem.id);
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + newItem.quantity,
          totalPrice: updatedCart[existingItemIndex].totalPrice + newItem.totalPrice,
        };
        return updatedCart;
      } else {
        return [...prevCart, newItem];
      }
    });
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty. Add items before placing an order.");
      return;
    }
    setOrderSummary(cart); // ✅ Save cart items as order
    setCart([]); // ✅ Clear the cart after placing order
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, placeOrder, orderSummary }}>
      {children}
    </CartContext.Provider>
  );
};
