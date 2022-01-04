import './navbar.scss'

import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = ({sideToggle, setSideToggle}) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2><Link to="/">Shop</Link></h2>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
            <span className="cart__items">{getCartCount()}</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>
      <div className="hamburger__menu" onClick={() => setSideToggle(true)}>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
      </div>
    </nav>
  )
}

export default Navbar
