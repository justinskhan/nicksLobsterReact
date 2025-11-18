import { Link } from "react-router-dom";

export default function Header() 
{
  return (
    <nav>
      <div className="myLogo">
        <img src="/images/icon.png" alt="Nick's Lobster Logo" />
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}