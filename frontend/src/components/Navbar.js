import './navbar.scss'

import { Link } from 'react-router-dom';

const Navbar = ({sideToggle, setSideToggle}) => {
  
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2><Link to="/">Shop</Link></h2>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/" className="cart__link">
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
      <div className="hamburger__menu" onClick={() => setSideToggle(true)}>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
      </div>
    </nav>
  )
}

export default Navbar
