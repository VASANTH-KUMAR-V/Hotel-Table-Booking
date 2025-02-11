import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Order from "./Components/Order/Order.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import Menu from "./Components/Menu/Menu.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order" element={<Order />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
