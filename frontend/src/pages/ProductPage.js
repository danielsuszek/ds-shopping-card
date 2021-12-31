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
      Product Page 
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div>
          {product.name}
        </div>
      )}
    </div>
  )
}

export default ProductPage
