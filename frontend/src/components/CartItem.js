import "./cartitem.scss"
import { Link } from "react-router-dom";

const CartItem = ({item, qtyChangeHandler, removeHandler}) => {
  return (
    <div className="cartitem">
      <div className="cartitem__left">
        <img className="cartitem__left__img" src={item.imageUrl} alt={item.name} />
        <div className="cartitem__left__name">
          <Link to={`/product/${item.id}`}>{item.name}</Link>
        </div>
      </div>
      <div className="cartitem__right">
        <div className="cartitem__right__price">${item.price}</div>
        <select
          value={item.qty}
          onChange={(e) => qtyChangeHandler(item.id, e.target.value)}
          className="cartitem__right__qty"
        >
          {[...Array(item.countInStock).keys()].map((i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
        <button 
          className="cartitem__right__deleteBtn"
          onClick={() => removeHandler(item.id)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default CartItem