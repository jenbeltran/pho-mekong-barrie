import React from 'react';
import SEO from '../components/seo';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';
import NavMobile from '../components/NavMobile/NavMobile.js';

const ErrorPage = () => {
	return (
		<div>
			<SEO title="404" />
			<NavDesktop />
			<NavMobile />
			<h1>Oops, we lost connection</h1>
		</div>
	);
};

export default ErrorPage;
