import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { DesktopNavSection } from './NavDesktop.css';
import NavData from './data.js';
import { uuid } from 'uuidv4';

// TODO: Have to add the click when tabbing through the nav options!
const SidebarMenuVisible = ({activeItem, setActiveItem}) => {

	const handleItemClick = (evt) => (
		setActiveItem(evt.target.dataset.name)
	);

	const handleItemTab = (evt) => {
		if(evt.nativeEvent.key === 'Enter') {
			setActiveItem(evt.target.dataset.name)
		}
	}

	const getAllNavItems = NavData.map(nav => {
		const { name, uri } = nav;
		return(
			<Menu.Item key={uuid()}	href={`/${uri}`} name={name} data-name={name} active={activeItem === `${name}`} tabIndex={0} onKeyDown={handleItemTab}>
				{name}
			</Menu.Item>
		)
	});

	return (
		<DesktopNavSection id="nav-desktop">
				<Sidebar as={Menu} animation="push" icon="labeled" inverted vertical visible onClick={handleItemClick}>
					{getAllNavItems}
			</Sidebar>
		</DesktopNavSection>
	)
};

export default SidebarMenuVisible;
