import React, { useState } from 'react';
import SEO from '../components/seo';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';
import NavMobile from '../components/NavMobile/NavMobile.js';
import MenuSection from '../components/MenuSection/MenuSection.js';
import Banner from '../components/Banner/Banner.js';
import styled from 'styled-components';
import { uuid } from 'uuidv4';
import data from '../components/data.js'

const MenuContent = styled.section.attrs({
	id: 'content'
})`
	margin: 0em 1em 0 14em;
`;

const FullMenu = (props) => {
	
	const [ activeItem, setActiveItem ] = useState('Full Menu');

	const MenuItems = data.map((section) => <MenuSection key={uuid()} activeItem={activeItem} section={section} />);

	return (
		<section>
			<SEO title="Home" />
      <NavMobile />
			<NavDesktop activeItem={activeItem} setActiveItem={setActiveItem} />
				<Banner activeItem="Full Menu"/>
				<MenuContent>{MenuItems}</MenuContent>
		</section>
	);
};
export default FullMenu;