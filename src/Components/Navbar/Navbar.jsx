import React from "react";
import { NavLink } from "react-router-dom";
import { HomeOutlined, ShoppingCartOutlined, UserOutlined, ShopOutlined } from "@ant-design/icons";
import "./Navbar.css";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <HomeOutlined />
        <span>Home</span>
      </NavLink>
      
      <NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : "")}>
        <ShopOutlined />
        <span>Menu</span>
      </NavLink>
      
      <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>
        <ShoppingCartOutlined />
        <span>Cart</span>
      </NavLink>
      
      <NavLink to="/order" className={({ isActive }) => (isActive ? "active" : "")}>
        <UserOutlined />
        <span>Order</span>
      </NavLink>
    </div>
  );
};

export default BottomNav;
