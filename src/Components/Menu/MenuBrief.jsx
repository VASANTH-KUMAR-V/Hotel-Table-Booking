import React, { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import "./MenuBrief.css";

const MenuBrief = ({ isOpen, item, onClose }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [observations, setObservations] = useState("");

  if (!isOpen || !item) return null; // Don't render if modal is closed

  // Helper function to calculate total price based on quantity
  const calculateTotal = () => {
    return item.price * quantity;
  };

  const handleQuantityChange = (value) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + value;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...item,
      quantity,
      observations,
      totalPrice: calculateTotal(),
    };

    addToCart(cartItem); // Add item to cart
    setQuantity(1); // Reset quantity
    setObservations(""); // Reset observations
    onClose(); // Close modal
  };

  return (
    <div className="menu-brief-overlay">
      <div className="menu-brief-modal">
        <button className="close-button" onClick={onClose}>×</button>

        {/* Product Image */}
        <img className="menu-brief-image" src={item.image} alt={item.name} />

        {/* Product Details */}
        <h3 className="menu-brief-title">{item.name}</h3>
        <p className="menu-brief-description">{item.description}</p>

        {/* Observations Input */}
        <p className="menu-brief-label">Observations</p>
        <input
          type="text"
          className="menu-brief-input"
          placeholder="Add observations..."
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
        />

        {/* Quantity Selector */}
        <div className="menu-brief-quantity">
          <button className="quantity-button" onClick={() => handleQuantityChange(-1)}>
            -
          </button>
          <span className="quantity-value">{quantity}</span>
          <button className="quantity-button" onClick={() => handleQuantityChange(1)}>
            +
          </button>
        </div>

        {/* Price Calculation */}
        <p className="menu-brief-price">Total: ₹ {calculateTotal()}</p>

        {/* Add to Cart Button */}
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuBrief;
