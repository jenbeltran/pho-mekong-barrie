import React, { useState, Fragment } from 'react';
import SEO from '../components/seo';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';
import MenuSection from '../components/MenuSection/MenuSection.js';
import Banner from '../components/Banner/Banner.js';
import styled from 'styled-components';
import data from '../components/data';
import Landing from '../components/LandingPage/Landing';

// TODO: Move styled components to a separate file

const MenuContent = styled.section`margin: 0 1em 0 12em;`;

const MenuPage = () => {
	const [ activeItem, setActiveItem ] = useState('Pho Mekong');

	// Logic which updates menu content depending on the state of the Navmenu
	let fitlered;

	if (activeItem === 'Full Menu') {
		fitlered = data;
	} else {
		fitlered = data.filter((section) => section.header === activeItem);
	}

	const MenuItems = fitlered.map((section) => <MenuSection section={section} />);

	return (
		<section>
			<SEO title="Home" />
			<NavDesktop activeItem={activeItem} setActiveItem={setActiveItem} />
			{activeItem === 'Pho Mekong' ? (
				<Landing />
			) : (
				<Fragment>
					<Banner activeItem={activeItem}/>
					<MenuContent>{MenuItems}</MenuContent>
				</Fragment>
			)}
		</section>
	);
};

export default MenuPage;
