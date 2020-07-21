import React, { useState } from 'react';
import SEO from '../components/seo';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';
import MenuSection from '../components/MenuSection/MenuSection.js';
import Banner from '../components/Banner/Banner.js';
import CartHeader from '../components/CartHeader/CartHeader';
import styled from 'styled-components';
import { uuid } from 'uuidv4';
import data from '../components/data.js';

const MenuContent = styled.section`margin: 0em 1em 0 13em;`;

const FullMenu = (props) => {
	console.log(props.pageContext);
	const [ activeItem, setActiveItem ] = useState('Full Menu');

	const MenuItems = data.map((section) => <MenuSection key={uuid()} activeItem={activeItem} section={section} />);

	return (
		<section>
			<SEO title="Home" />
			<NavDesktop activeItem={activeItem} setActiveItem={setActiveItem} />
			<Banner activeItem="Full Menu" />
			<CartHeader />
			<MenuContent>{MenuItems}</MenuContent>
		</section>
	);
};
export default FullMenu;
