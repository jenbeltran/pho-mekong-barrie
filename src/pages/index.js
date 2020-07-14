import React from 'react';
import SEO from '../components/seo';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';

import Landing from '../components/LandingPage/Landing';

const IndexPage = () => {
	return (
		<div>
			<SEO title="Home" />
			<NavDesktop />
			<Landing />
		</div>
	);
};

export default IndexPage;
