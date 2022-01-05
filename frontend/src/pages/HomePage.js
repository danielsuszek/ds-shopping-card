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
      <h2 className="homepage__title">Produkty</h2>
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
    </div>
  )
}

export default HomePage
