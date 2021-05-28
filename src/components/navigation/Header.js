import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../../context/cart-context';

import CartIcon from './CartIcon';
import './Header.css';

const Header = props => {
  const [count, setCount] = useState(0);
  const {cart} = useContext(CartContext);

  useEffect(() => {
    const newCount = cart.reduce((acc, item) => {
      return acc + parseInt(item.quantity);
    },0);
    setCount(newCount);
  }, [cart])

  return (
    <div className="header">
      <div className="header-left">ReactMeals</div>
      <div className="header-right button" onClick={props.toggleCart}>
        <CartIcon />
        Your Cart
        <div className="badge">{count}</div>
      </div>
    </div>
  );
};

export default Header;