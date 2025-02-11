import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { HomeOutlined, ShoppingCartOutlined, UserOutlined, ShopOutlined } from "@ant-design/icons";
import './Navbar.css'
import Home from "../Home/Home"
import Menu from "../Menu/Menu";
import Cart from "../Cart/Cart";
import Order from "../Order/Order";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <NavLink to="/" activeClassName="active">
        <HomeOutlined />
        <span>Home</span>
      </NavLink>
      <NavLink to="menu" activeClassName="active">
        <ShopOutlined />
        <span>Menu</span>
      </NavLink>
      <NavLink to="cart" activeClassName="active">
        <ShoppingCartOutlined />
        <span>Cart</span>
      </NavLink>
      <NavLink to="order" activeClassName="active">
        <UserOutlined />
        <span>Order</span>
      </NavLink>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
      </Routes>
    </div>
  );
};

export default BottomNav;
