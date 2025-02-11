import React from 'react';
import { products } from '../../Data/data';
import './Menu.css'; // Import CSS file for styling

const Menu = () => {
  return (
    <div className="menu-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img className="product-image" src={product.image} alt={product.name} />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">Price: ₹{product.price}</p>
          <p className="product-category">{product.category}</p>
          <p className="product-Shortdescription">{product.shortdescription}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
