import "../styles.menu.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Menu() {
  const { addToCart } = useContext(CartContext);

  // You can expand this with all your real menu items
  const items = [
    { id: 1, name: "Lobster Roll", price: 15, image: "/images/lobsterroll.jpg" },
    { id: 2, name: "Chowder", price: 10, image: "/images/chowder.jpg" },
    { id: 3, name: "Shrimp", price: 12, image: "/images/shrimp.jpg" },
  ];

  return (
    <>
      <Header />
      <h2 className="page-title">Menu</h2>

      <div className="menu-container">
        {items.map((item) => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>

            <button onClick={() => addToCart({ ...item, quantity: 1 })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}