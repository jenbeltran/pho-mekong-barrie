import React from 'react';
import SEO from '../components/seo';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';
import NavMobile from '../components/NavMobile/NavMobile.js';
import MenuSection from '../components/MenuSection/MenuSection.js';
import Banner from '../components/Banner/Banner.js';
import CartHeader from '../components/CartHeader/CartHeader';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import allMenuData from '../data/menuData.js';
import BannerData from '../components/Banner/data';

const MenuContent = styled.section.attrs({
	id: 'content'
})`
	margin: 0em 1em 0 14em;
`;

const FullMenu = (props) => {
	
	const { header } = props.pageContext;
	// receives an array of all the sections of the menu to render

	const MenuItems = allMenuData.map((section) => <MenuSection fullMenu key={uuidv4()} section={section} />);

	return (
		<section>
			<SEO title={header} />
      <NavMobile/>
			<NavDesktop activeItem={header} />
			<Banner activeItem="Full Menu" />
				{/* <CartHeader /> */}
				<MenuContent>{MenuItems}</MenuContent>
		</section>
	);
};
export default FullMenu;
