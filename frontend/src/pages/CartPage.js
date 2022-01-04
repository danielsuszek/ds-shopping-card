import './cartpage.scss';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem"

import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartPage = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);
  
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }
  
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));    
  }
  
  return (
    <div className="cartpage">      
      <div className="cartpage__items">
        <h2>Twój koszyk</h2>
        {cartItems.length === 0 ? (
          <h3>Twój koszyk jest pusty</h3>
        ) : (
          cartItems.map((item) => (
            <CartItem 
              key={item.id}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeFromCartHandler}
            />
          ))
        )}
      </div>
      <div className="cartpage__subtotal">
        Subtotal
      </div>
    </div>
  )
}

export default CartPage
