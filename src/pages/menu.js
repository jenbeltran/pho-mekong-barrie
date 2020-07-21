import React, { useState } from 'react';
import SEO from '../components/seo';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';
import NavMobile from '../components/NavMobile/NavMobile.js';
import MenuSection from '../components/MenuSection/MenuSection.js';
import Banner from '../components/Banner/Banner.js';
import styled from 'styled-components';
import { uuid } from 'uuidv4';

// TODO: Move styled components to a separate file

const MenuContent = styled.section`margin: 0em 1em 0 13em;`;

const MenuPage = (props) => {

	const passedPageContent = [{...props.pageContext.category}];
	const [ activeItem, setActiveItem ] = useState(props.pageContext.category.header);

	const MenuItems = passedPageContent.map((section) => <MenuSection key={uuid()} activeItem={activeItem} section={section} />);

	return (
		<section>
			<SEO title="Home" />
			<NavMobile/>
			<NavDesktop activeItem={activeItem} setActiveItem={setActiveItem} />
				<Banner activeItem={passedPageContent[0].header}/>
				<MenuContent>{MenuItems}</MenuContent>
		</section>
	);
};
export default MenuPage;
