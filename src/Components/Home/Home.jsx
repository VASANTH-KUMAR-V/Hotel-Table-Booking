import React from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./Home.css";
import SearchBar from "../Home/SearchBar";

import HeroImage from "../../Assets/Image/Hero.jpg";
import Dish1 from "../../Assets/Image/Naan.jpg";
import Dish2 from "../../Assets/Image/Noodles.jpeg";
import Dish3 from "../../Assets/Image/PaneerButterMasala.jpg";

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
          <button className="menu-button">
            <NavLink to="/menu">
              <span>View Menu</span>
            </NavLink>
          </button>
        </div>
      </div>

      {/* Explore Menu Section */}
      <section className="explore-menu">
        <h2 className="menu-title">Explore our Menu</h2>
        <p className="menu-description">
          Choose from a diverse menu with a delicious variety of dishes. Whether you're in the mood for savory, sweet, or something in between, we've got you covered.
        </p>
      </section>

      {/* Featured Dishes Section */}
      <section className="featured-dishes">
        <h2>Featured Dishes</h2>
        <div className="dish-grid">
          <div className="dish-card">
            <img src={Dish1} alt="Spicy Chicken Wings" className="dish-image" />
            <h3>Spicy Chicken Wings</h3>
            <p>A perfect blend of spice and flavor.</p>
          </div>
          <div className="dish-card">
            <img src={Dish2} alt="Classic Margherita Pizza" className="dish-image" />
            <h3>Classic Margherita Pizza</h3>
            <p>Fresh ingredients with a crispy crust.</p>
          </div>
          <div className="dish-card">
            <img src={Dish3} alt="Chocolate Lava Cake" className="dish-image" />
            <h3>Chocolate Lava Cake</h3>
            <p>Decadent dessert with a molten center.</p>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="special-offers">
        <h2>Special Offers</h2>
        <div className="offer-content">
          <p>
            Enjoy exclusive deals and discounts when you order online. Check out our weekly specials and save on your favorite meals!
          </p>
          <button className="offer-button">
            <NavLink to="/offers">View Offers</NavLink>
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <p>
              "Amazing food and great service! Highly recommend this restaurant."
            </p>
            <h4>- Alex</h4>
          </div>
          <div className="testimonial">
            <p>
              "The flavors are out of this world. I love the variety in the menu!"
            </p>
            <h4>- Jamie</h4>
          </div>
          <div className="testimonial">
            <p>
              "Fast delivery and the food always arrives hot and delicious."
            </p>
            <h4>- Sam</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Satisfy Your Cravings?</h2>
        <button className="cta-button">
          <NavLink to="/menu">Order Now</NavLink>
        </button>
      </section>
    </div>
  );
};

export default Menu;
