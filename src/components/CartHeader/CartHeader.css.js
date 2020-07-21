import styled from 'styled-components';
import { Link } from 'gatsby';

const BannerCheckoutSection = styled.section`
	background-color: #dcdcdc;
	margin: 0;
	padding: 1rem 2rem 1rem 0rem;
	width: 101%;
`;

const ViewOrderLink = styled(Link)`text-decoration:none; color: #000000;`;

export { BannerCheckoutSection, ViewOrderLink };
