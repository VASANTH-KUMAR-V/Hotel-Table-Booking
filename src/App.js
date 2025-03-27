import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Order from "./Components/Order/Order";
import Cart from "./Components/Cart/Cart";
import Menu from "./Components/Menu/Menu";
import { CartProvider } from "./CartContext"; // Import CartProvider

function App() {
  return (
    <CartProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
        </Routes>
        <Navbar />
      </div>
    </CartProvider>
  );
}

export default App;
