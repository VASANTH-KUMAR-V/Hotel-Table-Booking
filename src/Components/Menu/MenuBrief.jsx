// import React, { useState } from "react";
// import { Modal, Button, Input } from "antd";
// import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
// import "./Menu.css";

// // Import images
// import Burger from "../../Assets/Image/Meals/burger.jpg";
// import SmashBurger from "../../Assets/Image/Meals/smash-burger.jpg";
// import Beverage from "../../Assets/Image/Meals/beverages.jpg";

// const menuItems = [
//   {
//     name: "Spicy Smash Burger",
//     image: SmashBurger,
//     price: 26,
//     description: "A smash burger with spicy seasoning, jalapeños, pepper jack cheese, and chipotle sauce.",
//   },
//   {
//     name: "Classic Burger",
//     image: Burger,
//     price: 20,
//     description: "A classic beef burger with lettuce, tomato, cheese, and house special sauce.",
//   },
//   {
//     name: "Beverages",
//     image: Beverage,
//     price: 5,
//     description: "A refreshing selection of soft drinks, juices, and milkshakes.",
//   },
// ];

// const Menu = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   const showModal = (item) => {
//     setSelectedItem(item);
//     setIsModalOpen(true);
//     setQuantity(1);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedItem(null);
//   };

//   return (
//     <div className="menu-container">
//       {/* Menu Items */}
//       <div className="menu-items">
//         {menuItems.map((item) => (
//           <div key={item.name} className="menu-item" onClick={() => showModal(item)}>
//             <img src={item.image} alt={item.name} className="menu-item-image" />
//             <p className="menu-item-name">{item.name}</p>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       <Modal
//         title={selectedItem?.name}
//         open={isModalOpen}
//         onCancel={closeModal}
//         footer={null}
//         centered
//         className="menu-modal"
//       >
//         {selectedItem && (
//           <div>
//             <img src={selectedItem.image} alt={selectedItem.name} className="modal-image" />
//             <p className="price">
//               <strong>Price</strong> <span className="price-value">${selectedItem.price}</span>
//             </p>
//             <p className="description">
//               <strong>Description</strong> <br />
//               {selectedItem.description}
//             </p>

//             {/* Observations */}
//             <p className="observations-title">Observations</p>
//             <Input placeholder="Add observations..." className="observations-input" />

//             {/* Quantity Selector */}
//             <div className="quantity-container">
//               <MinusCircleOutlined
//                 className="quantity-icon"
//                 onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
//               />
//               <span className="quantity">{quantity}</span>
//               <PlusCircleOutlined
//                 className="quantity-icon"
//                 onClick={() => setQuantity(quantity + 1)}
//               />
//               <span className="total-price">${selectedItem.price * quantity}</span>
//             </div>

//             {/* Add to Cart Button */}
//             <Button type="primary" block className="add-to-cart-button">
//               Add to cart
//             </Button>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default Menu;
