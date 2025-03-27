import React, { useState, useContext } from "react";
import { CartContext } from "../../CartContext";
import { products } from "../../Data/data";
import MenuBrief from "./MenuBrief";
import "./Menu.css";

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Extract unique categories
  const categories = ["All", ...new Set(products.map((product) => product.category))];

  // Filter products by selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="menu-container">
      <h2 className="menu-title">Menus</h2>

      {/* Category Filter Buttons */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        {filteredProducts.map((product) => (
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

      {/* MenuBrief Modal */}
      <MenuBrief isOpen={isModalOpen} item={selectedItem} onClose={closeModal} addToCart={addToCart} />
    </div>
  );
};

export default Menu;
