import React from 'react';
import { RestaurantData } from './data';
import { LandingSection, Wrapper, Wrapper2, Headline, Info, RestaurantPhoto } from './Landing.css.js';

const Landing = () => {
	const { photo, alt, headline, street, postalcode, phone } = RestaurantData;
	return (
		<LandingSection>
			<Wrapper>
				<Headline>{headline}</Headline>
				<Info>{street}</Info>
				<Info>{postalcode}</Info>
				<Wrapper2>
					<Headline>For Delivery:</Headline>
					<Info>{phone}</Info>
				</Wrapper2>
			</Wrapper>
			<RestaurantPhoto src={photo} alt={alt} />
		</LandingSection>
	);
};

export default Landing;
