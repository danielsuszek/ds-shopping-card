import './sidedrawer.scss'

import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

const SideDrawer = ({sideToggle, setSideToggle}) => {
  const cssDrawerClasses = ['sidedrawer']

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  
  if (sideToggle) cssDrawerClasses.push('show')
  return (
    <div className={cssDrawerClasses.join(" ")}>
      <ul className="sidedrawer__links" onClick={() => setSideToggle(false)}>
      <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>Koszyk</span>
            <span className="cart__items">{getCartCount()}</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Sklep
          </Link>
        </li>
      </ul>      
    </div>
  )
}

export default SideDrawer
