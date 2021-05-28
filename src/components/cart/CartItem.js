import React, { useContext } from 'react';

import './CartItem.css';
import CartContext from '../../context/cart-context'

const CartItem = props => {
  const { incrementQuantity, decrementQuantity } = useContext(CartContext);

  const incrementHandler = () => {
    incrementQuantity(props.id);
  }

  const decrementHandler = () => {
    decrementQuantity(props.id);
  }

  return (
    <div className="cart-item">
      <h2>{props.name}</h2>
      <div className="price">${props.price.toFixed(2)}</div>
      <div className="amount">x {props.quantity}</div>
      <div className="actions">
        <button onClick={decrementHandler}>-</button>
        <button onClick={incrementHandler}>+</button>
      </div>
    </div>
  );
};

export default CartItem;