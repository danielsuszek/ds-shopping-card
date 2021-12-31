import './productpage.scss'

import { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'

import { getProduct } from "../redux/actions/productActions"

const ProductPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  
  const productDetails = useSelector((state) => state.getProduct);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && id !== product._id)
      dispatch(getProduct(id));
  }, [dispatch, id, product]);

  
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="productpage">
          <div className="productpage__info">
            <div className="info__imgWrapper">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="productpage__info__description">
              <div className="description__name">
                <h2>{product.name}</h2>
              </div>
              <div className="description__price">
                <p>Cena: ${product.price}</p>
              </div>
              <div className="description__description">
                <p> {product.description}</p>
              </div>
            </div>
          </div>
          <div className="productpage__cart">
              cart
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductPage
