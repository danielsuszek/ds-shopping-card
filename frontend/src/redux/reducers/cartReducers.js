import * as actionTypes from "../constants/cartConstants";

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload
      const existItem = state.cartItems.find((el) => el.id === item.id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((el) =>
            el.id === existItem.id ? item : el
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
