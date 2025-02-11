import React from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import "./Home.css";
import NavBar from "../Navbar/Navbar"
import SearchBar from "../Home/SearchBar";

// Import images
import Burger from "../../Assets/Image/Chappathi.jpg";
import SmashBurger from "../../Assets/Image/poori.jpg";
import Beverage from "../../Assets/Image/Noodles.jpeg";
import HeroImage from "../../Assets/Image/Hero.jpg";


const menuItems = [
  { name: "Burgers", image: Burger },
  { name: "Smash Burgers", image: SmashBurger },
  { name: "Beverages", image: Beverage },
];

const Menu = () => {
  return (

    <div className="menu-container">
      <SearchBar />
      {/* Address */}
      <div className="menu-address">
        <EnvironmentOutlined className="location-icon" />
        <span>1-52 Rf Rosd, Palni, 624601</span>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <img src={HeroImage} alt="Delicious Food" className="hero-image" />
        <div className="hero-overlay">
          <h2>Order your favorite food here</h2>
          <button className="menu-button">View Menu</button>
        </div>
      </div>

      {/* Menu Section */}
      <h2 className="menu-title">Explore our menu</h2>
      <p className="menu-description">
        Choose from a diverse menu with a delicious variety of dishes.
      </p>

      {/* Menu Items */}
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.name} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <p className="menu-item-name">{item.name}</p>
          </div>
        ))}
      </div>
      <NavBar />
    </div>
  );
};

export default Menu;
