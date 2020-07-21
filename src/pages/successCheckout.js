import React from 'react';
import SEO from '../components/seo';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';
import NavMobile from '../components/NavMobile/NavMobile.js';

const SuccessCheckout = () => {
	return (
		<div>
			<SEO title="SuccessCheckout" />
			<NavDesktop />
			<NavMobile />
			<h1>Thank you for your order - an email has been sent with a receipt</h1>
		</div>
	);
};

export default SuccessCheckout;
