import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Menu, Sidebar } from 'semantic-ui-react';
import { DesktopNavSection } from './NavDesktop.css';
import NavData from './data.js';

const SidebarMenuVisible = ({activeItem, setActiveItem}) => {

	const handleItemClick = (evt, {name}) => {
		setActiveItem(name);
	};

	// maps through the NavData to render the full Nav Bar
	// TODO: Check if there is a way to only add the onClick to the parent Sidebar, so all children components get the handler as well
	const getAllNavItems = NavData.map(nav => {
		const { name, link } = nav;
		return(
			<Menu.Item as="a" name={name} active={activeItem === `${name}`} onClick={handleItemClick}>
				{link ? <Link href={`${link}`}>{name}</Link> : <Fragment>{name}</Fragment>}
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
