import './cartpage.scss';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
  
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };
  
  return (
    <div className="cartpage">      
      <div className="cartpage__items">
        <h2>Twój koszyk</h2>
        {cartItems.length === 0 ? (
          <h3>Twój koszyk jest pusty</h3>
        ) : (
          <div>
            {cartItems.map((item) => (
              <CartItem 
                key={item.id}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))}
          </div>
        )}
      </div>
      <div className="cartpage__subtotal">
        <div className="subtotal__cartCount">Liczba sztuk: {getCartCount()} </div>
        <div className="subtotal__payment">Do zapłaty: <span>${getCartSubTotal()}</span></div>
        <button 
          className="subtotal__btnPay" 
          onClick={
            () => cartItems.length === 0 ? 
            alert('Twój koszyk jest pusty'):
            alert('To wszystko')
          }
        >
          Płacę
        </button>
      </div>
    </div>
  )
}

export default CartPage
