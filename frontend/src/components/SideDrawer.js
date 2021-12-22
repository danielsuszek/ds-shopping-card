import './sidedrawer.scss'

import { Link } from 'react-router-dom'

const SideDrawer = ({sideToggle, setSideToggle}) => {
  const cssDrawerClasses = ['sidedrawer']
  console.log('sideToggle', sideToggle)

  if (sideToggle) cssDrawerClasses.push('show')
  return (
    <div className={cssDrawerClasses.join(" ")}>
      <ul onClick={() => setSideToggle(false)}>
        <li>
          <Link to="/cart">Link 1</Link>
        </li>
        <li>
          <Link to="/">Link 2</Link>
        </li>
      </ul>      
    </div>
  )
}

export default SideDrawer
