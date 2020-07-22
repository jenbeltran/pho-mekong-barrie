import React from 'react';
import SEO from '../components/seo';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';
import Banner from '../components/Banner/Banner.js';
import Checkout from '../components/Checkout/Checkout';

const ViewCart = (props) => {
	return (
		<section>
			<SEO title="Home" />
			<NavDesktop />
			<Banner activeItem="Full Menu" />
			<Checkout />
		</section>
	);
};
export default ViewCart;
