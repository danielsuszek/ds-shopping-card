import './product.scss'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className="product">
      <div className="product__imgWrapper">
        <img 
          src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" 
          alt="" 
        /> 
      </div>
      <div className="product__info">
        <p className="info__name">
          name
        </p>
        <p className="info__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptate.
        </p>
        <p className="info__price">price</p>
        <Link to="/">Szczegóły</Link>
      </div>
    </div>
  )
}

export default Product
