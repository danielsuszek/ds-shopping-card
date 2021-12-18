import './navbar.scss'

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Shopping Cart</h2>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>Cart</span>
            <span className="cart__items">0</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>
      <div className="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
