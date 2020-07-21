import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const buttonStyles = {
	fontSize        : '13px',
	textAlign       : 'center',
	color           : '#000',
	padding         : '12px 60px',
	boxShadow       : '2px 5px 10px rgba(0,0,0,.1)',
	backgroundColor : 'rgb(255, 178, 56)',
	borderRadius    : '6px',
	letterSpacing   : '1.5px'
};

const stripePromise = loadStripe(`${process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}`);

const redirectToCheckout = async (event) => {
	event.preventDefault();
	const stripe = await stripePromise;
	const { error } = await stripe.redirectToCheckout({
		lineItems  : [ { price: `${process.env.A1}`, quantity: 1 }, { price: `${process.env.A2}`, quantity: 3 } ],
		mode       : 'payment',
		successUrl : `http://localhost:8000/successCheckout`,
		cancelUrl  : `http://localhost:8000/`
	});

	if (error) {
		console.warn('Error:', error);
	}
};

const Checkout = () => {
	return (
		<button style={buttonStyles} onClick={redirectToCheckout}>
			Checkout
		</button>
	);
};

export default Checkout;
