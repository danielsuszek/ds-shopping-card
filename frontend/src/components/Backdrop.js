import './backdrop.scss'

const Backdrop = ({sideToggle, setSideToggle}) => {


  return (
    sideToggle && 
    <div className='backdrop' onClick={() => setSideToggle(false)}></div>
  )
}

export default Backdrop
