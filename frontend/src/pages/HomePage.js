import './homepage.scss'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from '../components/Product'

import { getProducts as listProducts } from "../redux/actions/productActions";

const HomePage = () => {

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  
  return (
    <div className="homepage">
      <h2 className="homepage__title">Products</h2>
      <div className="homepage__products">
      {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}        
      </div>
      {/* "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"       */}
    </div>
  )
}

export default HomePage
