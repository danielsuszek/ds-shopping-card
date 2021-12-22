import './sidedrawer.scss'

import { Link } from 'react-router-dom'

const SideDrawer = ({sideToggle, setSideToggle}) => {
  const cssDrawerClasses = ['sidedrawer']
  console.log('sideToggle', sideToggle)

  if (sideToggle) cssDrawerClasses.push('show')
  return (
    <div className={cssDrawerClasses.join(" ")}>
      <ul className="sidedrawer__links" onClick={() => setSideToggle(false)}>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>      
    </div>
  )
}

export default SideDrawer
