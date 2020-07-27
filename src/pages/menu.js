import React from 'react';
import SEO from '../components/seo';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';
import NavMobile from '../components/NavMobile/NavMobile.js';
import MenuSection from '../components/MenuSection/MenuSection.js';
import Banner from '../components/Banner/Banner.js';
import styled from 'styled-components';
import { uuid } from 'uuidv4';

// TODO: use useRef instead of useState (also present in fullMenu page)

const MenuContent = styled.section.attrs({
	id: 'content'
})`
	margin: 0em 1em 0 13em;
`;

const MenuPage = (props) => {

	const passedPageContent = [{...props.pageContext.category}];

	console.log('menu page: ', props)
	const MenuItems = passedPageContent.map((section) => <MenuSection key={uuid()}  section={section} />);

	return (
		<section>
			<SEO title={passedPageContent[0].header} />
			<NavMobile/>
			<NavDesktop activeItem={passedPageContent[0].header} />
				<Banner activeItem={passedPageContent[0].header}/>
				<MenuContent>{MenuItems}</MenuContent>
		</section>
	);
};
export default MenuPage;
