import React from 'react';
import SEO from '../components/seo';
import NavDesktop from '../components/NavDesktop/NavDesktop.js';
import NavMobile from '../components/NavMobile/NavMobile.js';
import MenuSection from '../components/MenuSection/MenuSection.js';
import Banner from '../components/Banner/Banner.js';
import CartHeader from '../components/CartHeader/CartHeader';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';


const MenuContent = styled.section.attrs({
	id: 'content'
})`
	margin: 0em 1em 0 14em;
`;

const MenuPage = (props) => {
	if(props.location.pathname === '/menu/') return (
		<section>NO page exists</section>
	)
	
	const { header } = props.pageContext.category;

	return (
		<section>
			<SEO title={header} />
			<NavMobile/>
			<NavDesktop activeItem={header} />
				<Banner activeItem={header}/>
				{/* <CartHeader /> */}
				<MenuContent>
					<MenuSection key={uuidv4()} section={props.pageContext.category}/>
				</MenuContent>
		</section>
	);
};

export default MenuPage;
