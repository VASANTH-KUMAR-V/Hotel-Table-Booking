import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, placeOrder } = useContext(CartContext);
  const navigate = useNavigate();

  const handleOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    placeOrder(); // Save order details and clear cart
    navigate("/order"); // Redirect to Order Summary page
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                  <p className="cart-item-price">₹ {item.totalPrice}</p>
                  <p className="cart-item-quantity">Instruction: {item.observations}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="place-order-button" onClick={handleOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
