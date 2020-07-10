import styled from 'styled-components';

const LandingSection = styled.section`
	position: relative;
	display: flex;
	margin: auto;
	padding: 5rem 12rem 5rem 12rem;

	@media (max-width: 480px) {
		margin: auto;
		padding-bottom: 10rem;
	}
`;

const Wrapper = styled.div`
	padding: 5rem 12rem 5rem 5rem;
	border-left: 5px solid grey;
	@media (max-width: 480px) {
		padding: 2rem 2rem 6rem 2rem;
	}
`;

const Wrapper2 = styled.div`padding-top: 4rem;`;

const Headline = styled.h2`
	font-size: 2rem;
	font-weight: 500;

	@media (max-width: 480px) {
		font-size: 2rem;
		font-weight: 500;
	}
`;

const Info = styled.p`font-size: 1.3rem;`;

const RestaurantPhoto = styled.img`
	height: 35rem;
	@media (max-width: 480px) {
		width: 100%;
		height: auto;
	}
`;

export { LandingSection, Wrapper, Wrapper2, Headline, Info, RestaurantPhoto };
