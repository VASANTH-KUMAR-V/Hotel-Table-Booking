import React, { useState } from "react";
import { products } from "../../Data/data";
import "./Menu.css"; // Ensure the CSS file is updated for styling
import MenuBrief from "./MenuBrief"; // Import MenuBrief modal component
import Menuimage from "../../Assets/Image/chicken_rice.jpg";

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="menu-container">
      <h2 className="menu-title">Thai</h2>
      <div className="menu-header">
        <img className="menu-header-image" src={Menuimage} alt="Thai Dishes" />
        <div className="menu-header-overlay">
          <h3 className="menu-header-text">Thai</h3>
          <p className="menu-header-description">Stir-fried rice noodles with eggs, spring onions...</p>
        </div>
      </div>
      <div className="menu-items">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => openModal(product)}>
            <img className="product-image" src={product.image} alt={product.name} />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-short-description">{product.shortdescription}</p>
              <p className="product-price">₹ {product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <MenuBrief isOpen={isModalOpen} item={selectedItem} onClose={closeModal} />
    </div>
  );
};

export default Menu;
