import React from 'react';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';
import NavMobile from '../components/NavMobile/NavMobile';
import { LandingSection, Wrapper, Headline, Info } from '../components/LandingPage/Landing.css';

const SuccessCheckout = (props) => {
	return (
		<div>
			<NavDesktop />
			<NavMobile />
			<LandingSection>
				<Wrapper>
					<Headline>404 Error</Headline>
					<Info>It seems we lost connection, please refresh the page.</Info>
				</Wrapper>
			</LandingSection>
		</div>
	);
};

export default SuccessCheckout;
