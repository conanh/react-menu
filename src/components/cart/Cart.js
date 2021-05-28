import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CartContext from '../../context/cart-context';

import CartItem from './CartItem';
import Card from '../UI/Card';
import Backdrop from '../UI/Backdrop';
import './Cart.css';

const Cart = props => {
  const {cart} = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const tempTotal = cart.reduce((acc, item) => {
      return acc + (item.quantity * item.price);
    },0);
    setTotal(tempTotal.toFixed(2));
  },[cart])

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.toggleCart} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Card id="cart">
          {cart.map((item, index) => 
            <CartItem key={index} id={item.id} name={item.name} price={item.price} quantity={item.quantity} />)}
          <div className="total">
            <div>Total Amount</div>
            <div>${total}</div>
          </div>
          <div className="actions">
            <button className="button--alt" onClick={props.toggleCart}>Close</button>
            <button className="button">Order</button>
          </div>
        </Card>,
        document.getElementById('modal-root')
      )}
    </React.Fragment>
  );
};

export default Cart;