import React, {useState} from 'react';
import SEO from '../components/seo';
import NavFullMenu from '../components/NavFullMenu/FullMenu.js';
import MenuSection from '../components/MenuSection/MenuSection.js';
import MenuItem from '../components/MenuItem/MenuItem.js';
import Banner from '../components/Banner/Banner.js';
import styled from 'styled-components';
import data from '../components/data';

// TODO: Move styled components to a separate file

const MenuContent = styled.section`
	margin: 0 1em 0 12em;
`

const MenuPage = () => {

	const [activeItem, setActiveItem] = useState('Full Menu');
	
	// Logic which updates menu content depending on the state of the Navmenu
	let fitlered;

	if(activeItem === 'Full Menu') {
		fitlered = data;
	} else {
		fitlered = data.filter(section => (section.header === activeItem));
	}

	const MenuItems = fitlered.map((section) => (
		<MenuSection section={section} />
	));

	return (
		<div>
			<SEO title="Home" />
			<NavFullMenu activeItem={activeItem} setActiveItem={setActiveItem}/>
			<Banner />
			<MenuContent>
				{MenuItems}
			</MenuContent>
			
		</div>
	);
};

export default MenuPage;
