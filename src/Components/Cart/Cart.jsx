import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    placeOrder,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  const gstRate = 0.18;
  const gst = subtotal * gstRate;
  const carttotal = subtotal + gst;

  const handleOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    placeOrder();
    navigate("/order");
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
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-quantity">
                    Quantity:
                    <button
                      className="qty-btn"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>
                    <span className="qty-number">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </p>
                  <p className="cart-item-price">₹ {item.totalPrice}</p>
                  <p className="cart-item-note">Instruction: {item.observations}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-totals">
            <p>Subtotal: ₹ {subtotal.toFixed(2)}</p>
            <p>GST (18%): ₹ {gst.toFixed(2)}</p>
            <p>Total: ₹ {carttotal.toFixed(2)}</p>
          </div>
          <button className="place-order-button" onClick={handleOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
