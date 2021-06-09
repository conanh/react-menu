import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CartContext from '../../context/cart-context';

import CartItem from './CartItem';
import Card from '../UI/Card';
import Backdrop from '../UI/Backdrop';
import Checkout from './Checkout';
import Confirmation from './Confirmation';
import './Cart.css';

const Cart = props => {
  const {cart} = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [checkoutStage, setCheckoutStage] = useState(0);

  useEffect(() => {
    const tempTotal = cart.reduce((acc, item) => {
      return acc + (item.quantity * item.price);
    },0);
    setTotal(tempTotal.toFixed(2));
  },[cart])

  const cartSubmitHandler = event => {
    event.preventDefault();
    setCheckoutStage(1);
  }

  const contactSubmitHandler = event => {
    // event.preventDefault();
    setCheckoutStage(2);
  }

  const cartUI = () => {
    if (checkoutStage === 0) {
      return (
      <Card id="cart">
        <form onSubmit={event=>event.preventDefault()}>
          {cart.map((item, index) => 
            <CartItem key={index} id={item.id} name={item.name} price={item.price} quantity={item.quantity} />)}
          <div className="total">
            <div>Total Amount</div>
            <div>${total}</div>
          </div>
          <div className="actions">
            <button className="button--alt" onClick={props.toggleCart}>Close</button>
            <button className="button" type="button" onClick={cartSubmitHandler}>Order</button>
          </div>
        </form>
      </Card>
      );
    }
    if (checkoutStage === 1) {
      return <Checkout toggleCart={props.toggleCart} onSubmit={contactSubmitHandler} />
    }
    if (checkoutStage === 2) {
      return <Confirmation toggleCart={props.toggleCart} />
    }
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.toggleCart} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        cartUI(),
        document.getElementById('modal-root')
      )}
    </React.Fragment>
  );
};

export default Cart;