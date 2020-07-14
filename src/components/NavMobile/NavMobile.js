import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo-favicon.png';

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

const Nav = () => {
	return (
		<div>
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
						<NavListItem>
							<NavLink to="/menu" activeClassName="is-active">
								Popular Items
							</NavLink>
						</NavListItem>
						<NavListItem>
							<NavLink to="/menu" activeClassName="is-active">
								Pho Soups
							</NavLink>
						</NavListItem>
						<NavListItem>
							<NavLink to="menu" activeClassName="is-active">
								Full Menu
							</NavLink>
						</NavListItem>
						<NavListItem>
							<NavLink to="/" activeClassName="is-active">
								Order Now
							</NavLink>
						</NavListItem>
					</StyleNavLinks>
				</NavElement>
			</StyleNav>
		</div>
	);
};

export default Nav;
