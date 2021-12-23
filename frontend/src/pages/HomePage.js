import Product from '../components/Product'
import './homepage.scss'

const HomePage = () => {
  return (
    <div className="homepage">
      <h2 className="homepage__title">Products</h2>
      <div className="homepage__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      {/* "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"       */}
    </div>
  )
}

export default HomePage
