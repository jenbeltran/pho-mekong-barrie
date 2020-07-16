import React from 'react';
// import { Link } from 'gatsby';
import { Menu, Sidebar } from 'semantic-ui-react';
import { DesktopNavSection } from './NavDesktop.css';
import NavData from './data.js';
import { uuid } from 'uuidv4';

const SidebarMenuVisible = ({activeItem, setActiveItem}) => {

	const handleItemClick = (evt, {name}) => {
		
		setActiveItem(name);
	};

	const handleItemTab = (evt) => {
		console.log(evt.target.dataset.name)
		// setActiveItem(evt.target.dataset.name)
	}

	// TODO: Check if there is a way to only add the onClick to the parent Sidebar, so all children components get the handler as well
	const getAllNavItems = NavData.map(nav => {
		const { name } = nav;
		return(
			<Menu.Item key={uuid()} name={name} data-name={name} active={activeItem === `${name}`} tabIndex={0} onKeyDown={handleItemTab} onClick={handleItemClick}>
				{name}
			</Menu.Item>
		)
	});

	return (
		<DesktopNavSection>
				<Sidebar as={Menu} animation="push" icon="labeled" inverted vertical visible>
					{getAllNavItems}
			</Sidebar>
		</DesktopNavSection>
	)
	
};

export default SidebarMenuVisible;
