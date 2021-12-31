import './product.scss'
import { Link } from 'react-router-dom'

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      <div className="product__imgWrapper">
        <img 
          src={imageUrl} 
          alt={name}
        /> 
      </div>
      <div className="product__info">
        <p className="info__name">
          {name}
        </p>
        <p className="info__description">
          {description.substr(0, 100)} ...
        </p>
        <p className="info__price">${price}</p>
         <Link to={`/product/${productId}`}>Szczegóły</Link>
      </div>
    </div>
  )
}

export default Product
