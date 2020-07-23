import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo-favicon.png';
import navData from '../NavDesktop/data.js';

import {
	StyleNav,
	StyledNavBrand,
	StyleNavLinks,
	NavListItem,
	NavLink,
	CheckboxInput,
	CheckboxLabel,
	MobileNavIcon,
	NavElement
} from './NavMobile.css';

// navData.push({ name: 'Order Online', uri: '' });

const getAllNavLinks = navData.map(navItem => {
	const { name, uri } = navItem;
	return(
		<NavListItem>
			<NavLink to={`/${uri}`} activeClassName="is-active">
				{name}
			</NavLink>
			{/* <hr></hr> */}
		</NavListItem>
	)
})

const Nav = () => {
	return (
		<NavElement>
			<CheckboxLabel htmlFor="mobile-nav-icon">
				<MobileNavIcon />
			</CheckboxLabel>
			<CheckboxInput type="checkbox" id="mobile-nav-icon" name="mobile-nav-icon" />

			<StyleNav id="#nav">
				<StyledNavBrand id="icon">
					<Link to="/" aria-label="Click to navigate to homepage">
						<img src={logo} alt="Pho Mekong Logo" />
					</Link>
				</StyledNavBrand>
				<NavElement>
				<StyleNavLinks>
						{getAllNavLinks}
					</StyleNavLinks>
				</NavElement>
			</StyleNav>
		</NavElement>
	);
};

export default Nav;
