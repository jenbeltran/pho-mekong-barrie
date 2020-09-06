import React from 'react';
import SEO from '../components/seo';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';
import NavMobile from '../components/NavMobile/NavMobile.js';
import Landing from '../components/LandingPage/Landing';

const IndexPage = () => {
	
	return (
		<div>
			<SEO title="Home" />
			<NavMobile />
			<NavDesktop activeItem="Pho Mekong"/>
			<Landing />
		</div>
	);
};

export default IndexPage;
