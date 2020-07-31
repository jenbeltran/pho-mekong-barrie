import React from 'react';
import { Button } from 'reactstrap';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(`${process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}`);

const redirectToCheckout = async (event) => {
	event.preventDefault();
	const stripe = await stripePromise;
	const { error } = await stripe.redirectToCheckout({
		lineItems  : [ { price: `${process.env.P1}`, quantity: 1 }, { price: `${process.env.A5}`, quantity: 3 } ],
		mode       : 'payment',
		successUrl : `http://localhost:8000/successCheckout`,
		cancelUrl  : `http://localhost:8000/viewCart`
	});

	if (error) {
		console.warn('Error:', error);
	}
};

const Checkout = (props) => {
	return (
		<Button color="warning" size="lg" className="float-right" onClick={redirectToCheckout}>
			Checkout
		</Button>
	);
};

export default Checkout;
