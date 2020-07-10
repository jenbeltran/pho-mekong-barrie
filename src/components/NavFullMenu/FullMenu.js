import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';

const SidebarMenuVisible = () => (
	<Sidebar as={Menu} animation="overlay" icon="labeled" inverted vertical visible width="thin">
		<Menu.Item as="a">Pho Mekong</Menu.Item>
		<Menu.Item as="a">Popular Items</Menu.Item>
		<Menu.Item as="a">Full Menu</Menu.Item>
		<Menu.Item as="a">Pho</Menu.Item>
		<Menu.Item as="a">Pad Thai</Menu.Item>
		<Menu.Item as="a">Vermicelli</Menu.Item>
		<Menu.Item as="a">Appetizers</Menu.Item>
		<Menu.Item as="a">Steamed Rice Dishes</Menu.Item>
		<Menu.Item as="a">Fried Rice Dishes</Menu.Item>
		<Menu.Item as="a">Noodle Soups</Menu.Item>
		<Menu.Item as="a">Small Soups</Menu.Item>
		<Menu.Item as="a">Stir-fry Noodles</Menu.Item>
		<Menu.Item as="a">Signature Dishes</Menu.Item>
		<Menu.Item as="a">Congee</Menu.Item>
		<Menu.Item as="a">Curry</Menu.Item>
		<Menu.Item as="a">Salads</Menu.Item>
		<Menu.Item as="a">Beverages</Menu.Item>
		<Menu.Item as="a">Contact Us</Menu.Item>
	</Sidebar>
);

export default SidebarMenuVisible;
