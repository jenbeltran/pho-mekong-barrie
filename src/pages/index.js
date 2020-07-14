import React from 'react';
import SEO from '../components/seo';

import NavMobile from '../components/NavMobile/NavMobile.js';

import Landing from '../components/LandingPage/Landing';

const IndexPage = () => {
	return (
		<div>
			<SEO title="Home" />
			<NavMobile />
			<Landing />
		</div>
	);
};

export default IndexPage;
