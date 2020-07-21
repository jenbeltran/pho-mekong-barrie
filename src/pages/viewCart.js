import React from 'react';
import SEO from '../components/seo';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';
import NavMobile from '../components/NavMobile/NavMobile.js';
import Checkout from '../components/Checkout/Checkout';

const ViewCart = () => {
	return (
		<div>
			<SEO title="shoppingCart" />
			<NavDesktop />
			<NavMobile />
			<h1>Shopping Cart</h1>
			<Checkout />
		</div>
	);
};

export default ViewCart;
