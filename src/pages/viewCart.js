import React, { useState } from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';
import MenuSection from '../components/MenuSection/MenuSection.js';
import Banner from '../components/Banner/Banner.js';
import { uuid } from 'uuidv4';
import data from '../components/data.js';
import Checkout from '../components/Checkout/Checkout';

const MenuContent = styled.section`margin: 0em 1em 0 13em;`;

const ViewCart = (props) => {
	console.log(props.pageContext);
	const [ activeItem, setActiveItem ] = useState('Full Menu');

	const MenuItems = data.map((section) => <MenuSection key={uuid()} activeItem={activeItem} section={section} />);

	return (
		<section>
			<SEO title="Home" />
			<NavDesktop />
			<Banner activeItem="Full Menu" />
			<MenuContent>{MenuItems}</MenuContent>
			<Checkout />
		</section>
	);
};
export default ViewCart;
