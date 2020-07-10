import React from 'react';
import SEO from '../components/seo';
import NavFullMenu from '../components/NavFullMenu/FullMenu.js';
import Landing from '../components/LandingPage/Landing';

const IndexPage = () => {
	return (
		<div>
			<SEO title="Home" />
			<NavFullMenu />
			<Landing />
		</div>
	);
};

export default IndexPage;
