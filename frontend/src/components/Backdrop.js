import './backdrop.scss'

const Backdrop = ({sideToggle, setSideToggle}) => {


  return (
    sideToggle && 
    <div className='backdrop' onClick={() => setSideToggle(false)}>
      Backdrop
    </div>
  )
}

export default Backdrop
