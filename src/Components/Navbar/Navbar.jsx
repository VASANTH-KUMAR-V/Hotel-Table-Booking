import React from "react";
import { NavLink } from "react-router-dom";
import { HomeOutlined, ShoppingCartOutlined, UserOutlined, ShopOutlined } from "@ant-design/icons";
import './Navbar.css'

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <NavLink to="/" activeClassName="active">
        <HomeOutlined />
        <span>Home</span>
      </NavLink>
      <NavLink to="/nearby" activeClassName="active">
        <ShopOutlined />
        <span>Menu</span>
      </NavLink>
      <NavLink to="/cart" activeClassName="active">
        <ShoppingCartOutlined />
        <span>Cart</span>
      </NavLink>
      {/* <NavLink to="/account" activeClassName="active">
        <UserOutlined />
        <span>Account</span>
      </NavLink> */}
    </div>
  );
};

export default BottomNav;
