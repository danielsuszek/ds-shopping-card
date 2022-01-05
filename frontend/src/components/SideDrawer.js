import './sidedrawer.scss'

import { Link } from 'react-router-dom'

const SideDrawer = ({sideToggle, setSideToggle}) => {
  const cssDrawerClasses = ['sidedrawer']

  if (sideToggle) cssDrawerClasses.push('show')
  return (
    <div className={cssDrawerClasses.join(" ")}>
      <ul className="sidedrawer__links" onClick={() => setSideToggle(false)}>
      <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>Koszyk</span>
            <span className="cart__items">0</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>      
    </div>
  )
}

export default SideDrawer
