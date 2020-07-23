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

const displayMobileNavItems = () => {
	// filter the nav Data
	
	// map through updated data to return 
}

const getAllNavLinks = navData.map(navItem => {
	const { name, uri } = navItem;
	return(
		<NavListItem>
			<NavLink to={`/${uri}`} activeClassName="is-active">
				{name}
			</NavLink>
		</NavListItem>
	)
})

const Nav = () => {
	return (
		<nav>
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
		</nav>
	);
};

export default Nav;
