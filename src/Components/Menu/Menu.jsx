import React, { useState } from "react";
import { products } from "../../Data/data";
import "./Menu.css";
import MenuBrief from "./MenuBrief";

// Import category images
import BreakfastImage from "../../Assets/Image/Dosai.jpg";
import Gravy from "../../Assets/Image/PaneerButterMasala.jpg";
import RiceImage from "../../Assets/Image/Meals.jpg";
import BreadsImage from "../../Assets/Image/parotta.jpg";
import ChineseImage from "../../Assets/Image/chicken_rice.jpg";


const categoryDetails = {
  All: {
    image: BreakfastImage,
    title: "All Items",
    description: "Explore a variety of delicious dishes across all categories.",
  },
  Breakfast: {
    image: BreakfastImage,
    title: "Breakfast",
    description: "Start your day with fresh and healthy breakfast options.",
  },
  "Gravy": {
    image: Gravy,
    title: "Gravy",
    description: "Enjoy wholesome meals with a mix of South and North Indian flavors.",
  },
  "Rice Varieties": {
    image: RiceImage,
    title: "Rice Varieties",
    description: "Savor different rice varieties like Lemon Rice, Curd Rice, and Biryani.",
  },
  "Indian Breads": {
    image: BreadsImage,
    title: "Indian Breads & Side Dishes",
    description: "Soft and fluffy breads paired with rich Indian curries.",
  },
  "Chinese": {
    image: ChineseImage,
    title: "Chinese & Indo-Chinese",
    description: "Taste the best of Chinese and Indo-Chinese fusion dishes.",
  }
  // "Starters & Soups": {
  //   image: StartersImage,
  //   title: "Starters & Soups",
  //   description: "Begin your meal with delicious starters and soups.",
  // },
  // "Desserts & Sweets": {
  //   image: DessertsImage,
  //   title: "Desserts & Sweets",
  //   description: "Indulge in sweet treats like Gulab Jamun, Rasgulla, and Ice Cream.",
  // },
};

const Menu = () => {
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

      {/* Dynamic Category Header */}
      <div className="menu-header">
        <img
          className="menu-header-image"
          src={categoryDetails[selectedCategory]?.image || BreakfastImage}
          alt={categoryDetails[selectedCategory]?.title}
        />
        <div className="menu-header-overlay">
          <h3 className="menu-header-text">{categoryDetails[selectedCategory]?.title}</h3>
          <p className="menu-header-description">{categoryDetails[selectedCategory]?.description}</p>
        </div>
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

      {/* Modal */}
      <MenuBrief isOpen={isModalOpen} item={selectedItem} onClose={closeModal} />
    </div>
  );
};

export default Menu;
