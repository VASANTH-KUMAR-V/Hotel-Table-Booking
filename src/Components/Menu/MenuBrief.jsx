import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import "./Menu.css";

const MenuBrief = ({ isOpen, item, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

  return (
    <Modal title={item.name} open={isOpen} onCancel={onClose} footer={null} centered>
      <div className="modal-content">
        <img src={item.image} alt={item.name} className="modal-image" />
        <p className="price">
          <strong>Price</strong> <span className="price-value">₹{item.price}</span>
        </p>
        <p className="description">
          <strong>Description</strong> <br />
          {item.shortdescription}
        </p>

        {/* Observations */}
        <p className="observations-title">Observations</p>
        <Input placeholder="Add observations..." className="observations-input" />

        {/* Quantity Selector */}
        <div className="quantity-container">
          <MinusCircleOutlined
            className="quantity-icon"
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          />
          <span className="quantity">{quantity}</span>
          <PlusCircleOutlined
            className="quantity-icon"
            onClick={() => setQuantity(quantity + 1)}
          />
          <span className="total-price">₹{item.price * quantity}</span>
        </div>

        {/* Add to Cart Button */}
        <Button type="primary" block className="add-to-cart-button">
          Add to cart
        </Button>
      </div>
    </Modal>
  );
};

export default MenuBrief;
