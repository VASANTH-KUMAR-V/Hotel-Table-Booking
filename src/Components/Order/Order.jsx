import { useContext } from "react";
import { CartContext } from "../../CartContext";
import "./Order.css";

const Order = () => {
  const { orderSummary } = useContext(CartContext);

  // Check if there are any orders before calculations
  const subtotal = orderSummary?.reduce((acc, item) => acc + item.totalPrice, 0) || 0;
  const gstRate = 0.18;
  const gst = subtotal * gstRate;
  const carttotal = subtotal + gst;

  return (
    <div className="order-summary-container">
      <h2 className="order-summary-title">Order Summary</h2>
      {orderSummary && orderSummary.length > 0 ? (
        <>
          <div className="table-wrapper">
            <table className="order-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {orderSummary.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="order-image"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>₹ {item.totalPrice.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="order-totals">
            <p>Subtotal: ₹ {subtotal.toFixed(2)}</p>
            <p>GST (18%): ₹ {gst.toFixed(2)}</p>
            <p>Total: ₹ {carttotal.toFixed(2)}</p>
          </div>
        </>
      ) : (
        <p className="no-orders">No orders placed.</p>
      )}
    </div>
  );
};

export default Order;
