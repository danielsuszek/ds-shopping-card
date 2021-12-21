import './sidedrawer.scss'

const SideDrawer = ({sideToggle, setSideToggle}) => {
  const cssDrawerClasses = ['sidedrawer']
  console.log('sideToggle', sideToggle)

  if (sideToggle) cssDrawerClasses.push('show')
  return (
    <div className={cssDrawerClasses.join(" ")}>
      <ul onClick={() => setSideToggle(false)}>
        <li>one</li>
        <li>two</li>
      </ul>      
    </div>
  )
}

export default SideDrawer
