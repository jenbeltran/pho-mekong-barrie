import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { DesktopNavSection } from './NavDesktop.css';
import NavData from './data.js';
import { v4 as uuidv4 } from 'uuid';

// TODO: Have to add the click when tabbing through the nav options!
const SidebarMenuVisible = ({activeItem}) => {
	const handleItemTab = (evt) => {
		if(evt.nativeEvent.key === 'Enter') {
			evt.target.click();
		}
	}

	const getAllNavItems = NavData.map(nav => {
		const { name, uri } = nav;
		return(
			<Menu.Item key={uuidv4()}	href={`/${uri}`} name={name} data-name={name} active={activeItem === `${name}`} tabIndex={0} onKeyDown={handleItemTab}>
				{name}
			</Menu.Item>
		)
	});

	return (
		<DesktopNavSection id="nav-desktop">
				<Sidebar as={Menu} animation="push" icon="labeled" inverted vertical visible >
					{getAllNavItems}
			</Sidebar>
		</DesktopNavSection>
	)
};

export default SidebarMenuVisible;
