import "../styles/menu.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Menu() 
{
  const { addToCart } = useContext(CartContext);

  // You can expand this with all your real menu items
  const items = [
    { id: 1, name: "Nick's Lobster Roll", price: 42, image: "images/lobsterRoll.webp" },
    { id: 2, name: "Lobster Tail", price: 50, image: "images/lobsterTail.webp" },
    { id: 3, name: "Fried Calamari", price: 20, image: "images/friedCalamari.avif" },
    { id: 4, name: "Mussels", price: 22, image: "images/mussels.avif" },
    { id: 5, name: "Clams Oreganata", price: 30, image: "images/clamsOreganata.jpeg" },
    { id: 6, name: "Grilled Branzino", price: 38, image: "images/grilledBranzino.jpg" },
    { id: 7, name: "Stuffed Shrimp", price: 44, image: "images/stuffedShrimp.jpg" },
    { id: 8, name: "NY Strip Steak", price: 40, image: "images/steak.avif" },
    { id: 9, name: "Surf and Turf", price: 96, image: "images/surfTurf.avif" }
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