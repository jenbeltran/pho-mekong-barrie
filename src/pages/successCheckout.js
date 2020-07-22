import React from 'react';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';
import NavMobile from '../components/NavMobile/NavMobile';
import { RestaurantData } from '../components/LandingPage/data';
import { LandingSection, Wrapper, Wrapper2, Headline, Info, LogoPhoto } from '../components/LandingPage/Landing.css';
import logo from '../images/logo-favicon.png';

const SuccessCheckout = (props) => {
	const { headline, street, postalcode, phone } = RestaurantData;
	return (
		<div>
			<NavDesktop />
			<NavMobile />
			<LandingSection>
				<Wrapper>
					<Headline>Thank you for ordering!</Headline>
					<Info>
						A receipt has been sent to the email address entered. Please provide receipt number upon pickup.
					</Info>
					<Wrapper2>
						<Headline>Pickup Address</Headline>
						<Info>{headline}</Info>
						<Info>{street}</Info>
						<Info>{postalcode}</Info>
					</Wrapper2>
					<Wrapper2>
						<Info>
							If you do not receive an email within the next 10 minutes, please contact us at {phone}
						</Info>
						<LogoPhoto src={logo} />
					</Wrapper2>
				</Wrapper>
			</LandingSection>
		</div>
	);
};

export default SuccessCheckout;
