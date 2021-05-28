import React, { useReducer } from 'react';
import CartContext from './cart-context';
import cartReducer from './cart-reducer';

import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from './cart-actions';

const CartState = props => {
  const initialState = {
    cart: [
      {
        id: "m1",
        name: "Sushi",
        price: 22.99,
        quantity: 1
      },
      {
        id: "m2",
        name: "Schnitzel",
        price: 16.50,
        quantity: 4
      }      
    ] // {id, name, price, quantity}
  }

  const addToCart = cartItem => {
    dispatch({
      type: ADD_TO_CART,
      payload: cartItem
    })
  };

  const incrementQuantity = id => {
    dispatch({
      type: INCREMENT_QUANTITY,
      payload: id
    })
  };

  const decrementQuantity = id => {
    dispatch({
      type: DECREMENT_QUANTITY,
      payload: id
    })
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{
      cart: state.cart,
      addToCart,
      incrementQuantity,
      decrementQuantity
    }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState;
