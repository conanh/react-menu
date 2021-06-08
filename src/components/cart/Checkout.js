import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
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
            <Formik
                initialValues={{ fullName: '', streetAddress: '', city: '', state: '', zipCode: '' }}
                validationSchema={Yup.object({
                    fullName: Yup.string().required('Please enter your full name'),
                    streetAddress: Yup.string().required('Please enter your street address'),
                    city: Yup.string().required('Please enter your city'),
                    state: Yup.string().required('Please enter your state'),
                    zipCode: Yup.number().min(10000, 'Please enter your zip code').max(99999, 'Please enter your zip code').required('Please enter your zip code')
                })}
                onSubmit={formSubmitHandler}
            >
                <Form>
                    <div className="form-line">
                        <label htmlFor="fullName">Full Name</label>
                        <Field name="fullName" type="text" />
                        <div className="error-text"><ErrorMessage name="fullName" /></div>
                    </div>
                    <div className="form-line">
                        <label htmlFor="streetAddress">Street Address</label>
                        <Field name="streetAddress" type="text" />
                        <div className="error-text"><ErrorMessage name="streetAddress" /></div>
                    </div>
                    <div className="form-line">
                        <label htmlFor="city">City</label>
                        <Field name="city" type="text" />
                        <div className="error-text"><ErrorMessage name="city" /></div>
                    </div>
                    <div className="form-line">
                        <label htmlFor="state">State</label>
                        <Field name="state" type="text" minlength="2" maxlength="2" size="3" />
                        <div className="error-text"><ErrorMessage name="state" /></div>
                    </div>
                    <div className="form-line">
                        <label htmlFor="zipCode">Zip Code</label>
                        <Field name="zipCode" type="text" minlength="5" maxlength="5" size="5" />
                        <div className="error-text"><ErrorMessage name="zipCode" /></div>
                    </div>
                    <div className="actions">
                        <button className="button--alt" onClick={props.toggleCart}>Cancel</button>
                        <button className="button" type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </Card>
    );
};

export default Checkout;