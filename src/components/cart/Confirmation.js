import React, { useContext } from 'react';
import Card from '../UI/Card';
import CartContext from '../../context/cart-context';

import './Confirmation.css';

const Confirmation = () => {
  const { cart, contact } = useContext(CartContext);

  return (
    <Card id="confirmation">
      <h2>Thanks for your order!</h2>
      <p>We'll have it delivered soon.</p>
      <div className="confirmation-info">
        <div className="orded-items">
          {cart.map(item => {
            return (
              <div key={item.id}>{item.quantity} x {item.name}</div>
            );
          })}
        </div>
        <div className="contact-info">
          <div>{contact.fullName}</div>
          <div>{contact.streetAddress}</div>
          <div>{contact.city}, {contact.state} &nbsp; {contact.zipCode}</div>
        </div>
      </div>
    </Card>
  );
};

export default Confirmation;