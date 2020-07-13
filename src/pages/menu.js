import React, {useState} from 'react';
import SEO from '../components/seo';
import NavFullMenu from '../components/NavFullMenu/FullMenu.js';
import MenuSection from '../components/MenuSection/MenuSection.js';
import MenuItem from '../components/MenuItem/MenuItem.js';
import Banner from '../components/Banner/Banner.js';
import styled from 'styled-components';
import data from '../components/data';

// TODO: Move styled components to a separate file
// Currently the BannerHeader and Desc are hardcoded, make this take props to make it reusable
const BannerSection = styled.div.attrs({
	className: 'pusher'
})`
	display: flex;
	justify-content: center;
`
const BannerHeader = styled.h1`
	position: absolute;
	top: 4em;
	transform: translateX(3em);
`

const Desc = styled.section`
	text-align: justify;
	display: flex;
	align-items: center;
	margin: 1em 2em 0 13em;
`

const MenuContent = styled.section`
	margin: 0 1em 0 12em;
`

const MenuPage = () => {

	const [activeItem, setActiveItem] = useState('fullMenu');
	
	// Create a function which filters the menu data depending ont the state of active item

	// Logic which updates menu content depending on the state of the Navmenu
	let fitlered;

	if(activeItem === 'fullMenu') {
		fitlered = data;
	} else {
		fitlered = data.filter(section => (section.header === activeItem));
	}

	const MenuItems = fitlered.map((section) => (
		<MenuSection section={section} />
	));

	console.log('activeItem: ', activeItem)
	return (
		<div>
			<SEO title="Home" />
			<NavFullMenu activeItem={activeItem} setActiveItem={setActiveItem}/>
			<section>
				<Banner />
				<BannerSection>
					<BannerHeader>Pho</BannerHeader>
				</BannerSection>
				<Desc>
				Pho is a popular Vietnamese noodle soup. Beef bones are simmered for many hours in combination with herbs and spices that help to bring out the flavour. It is served with traditional rice noodles and your choice of meat, or vegetables. Topped with green and white onions and black pepper.
				</Desc>
			</section>
			<MenuContent>
				{MenuItems}
			</MenuContent>
			
		</div>
	);
};

export default MenuPage;
