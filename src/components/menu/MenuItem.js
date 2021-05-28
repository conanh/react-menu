import React, { useState, useContext } from 'react';

import './MenuItem.css';
import CartContext from '../../context/cart-context';

const MenuItem = props => {
  const { addToCart } = useContext(CartContext);
  const [amount, setAmount] = useState(1);

  const onSubmitHandler = event => {
    event.preventDefault();
    const cartItem = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: amount
    };
    addToCart(cartItem);
  }
  return (
    <div className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{props.price}</div>
      </div>
      <form onSubmit={onSubmitHandler} className="form">
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" value={amount} onChange={e=>{setAmount(e.currentTarget.value)}} />
        </div>
        <button type="submit">+Add</button>
      </form>
    </div>
  );
};

export default MenuItem;