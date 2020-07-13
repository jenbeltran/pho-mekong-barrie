import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/Logo-resized.png';

import { CTALink } from '../../theme/components';
import { breakpoints } from '../../theme/constants';
import useWindoWidth from '../../hooks/useWindowWidth';

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
} from './css';

const Nav = () => {
	const { desktop } = breakpoints;
	const { windowWidth } = useWindoWidth();
	return (
		<div>
			<CheckboxLabel htmlFor="mobile-nav-icon">
				<MobileNavIcon />
			</CheckboxLabel>
			<CheckboxInput type="checkbox" id="mobile-nav-icon" name="mobile-nav-icon" />

			<StyleNav id="#nav">
				<StyledNavBrand id="icon">
					<Link to="/" aria-label="Click to navigate to homepage">
						<img src={logo} alt="Tech Teahouse Logo" />
					</Link>
				</StyledNavBrand>
				<NavElement>
					<StyleNavLinks>
						<NavListItem>
							<NavLink to="/" activeClassName="is-active">
								Home
							</NavLink>
						</NavListItem>
						<NavListItem>
							<NavLink to="/who-we-are" activeClassName="is-active">
								About Us
							</NavLink>
						</NavListItem>
						<NavListItem>
							<NavLink to="/what-we-do" activeClassName="is-active">
								Events
							</NavLink>
						</NavListItem>
						<NavListItem>
							<NavLink to="/join-us" activeClassName="is-active">
								Join Us
							</NavLink>
						</NavListItem>
						{windowWidth > desktop ? (
							<CTALink to="/sponsor-us">Become a Partner!</CTALink>
						) : (
							<NavListItem>
								<NavLink to="/sponsor-us" activeClassName="is-active">
									Become a Partner
								</NavLink>
							</NavListItem>
						)}
					</StyleNavLinks>
				</NavElement>
			</StyleNav>
		</div>
	);
};

export default Nav;
