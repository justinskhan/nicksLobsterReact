import "../styles/cart.css";
import { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

export default function Cart() 
{
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <section className="content-section">
        <h2 className="page-title">Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>${item.price} × {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="cart-total">Total: ${total.toFixed(2)}</p>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}