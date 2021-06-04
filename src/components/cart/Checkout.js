import React from 'react';
import Card from '../UI/Card';

import './Checkout.css';

const Checkout = props => {
    const formSubmitHandler = event => {
        event.preventDefault();

        props.toggleCart();
    }

    return (
        <Card id="checkout">
            <h2>Enter your contact information</h2>
            <form className="checkout-form" onSubmit={formSubmitHandler}>
                <div className="inputs">
                    <div>
                        <label htmlFor="name">Full name</label>
                        <input type="text" id="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="text" id="email" />
                    </div>
                </div>
                <div className="actions">
                    <button className="button" type="submit">Submit</button>   
                </div>
            </form>
        </Card>
    );
};

export default Checkout;