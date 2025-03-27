import { useContext } from "react";
import { CartContext } from "../../CartContext";
import "./Order.css";

const Order = () => {
  const { orderSummary } = useContext(CartContext); // ✅ Correct variable name

  return (
    <div className="order-summary-container">
      <h2 className="order-summary-title">Order Summary</h2>
      {orderSummary && orderSummary.length > 0 ? (
        <ul className="order-list">
          {orderSummary.map((item, index) => (
            <li key={index} className="order-item">
              <img src={item.image} alt={item.name} className="order-item-image" />
              <div className="order-item-info">
                <h3 className="order-item-name">{item.name}</h3>
                <p className="order-item-quantity">Quantity: {item.quantity}</p>
                <p className="order-item-price">₹ {item.totalPrice}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-orders">No orders placed.</p>
      )}
    </div>
  );
};

export default Order;
