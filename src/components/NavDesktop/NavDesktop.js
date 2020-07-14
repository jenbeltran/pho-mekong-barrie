import React from 'react';
import { Link } from 'gatsby';
import { Menu, Sidebar } from 'semantic-ui-react';
import { DesktopNavSection } from './NavDesktop.css';

const SidebarMenuVisible = () => (
	<DesktopNavSection>
		<Sidebar as={Menu} animation="push" icon="labeled" inverted vertical visible>
			<Menu.Item as="a">
				<Link href="/">Pho Mekong</Link>
			</Menu.Item>
			<Menu.Item as="a">
				<Link href="/menu">Popular Items</Link>
			</Menu.Item>
			<Menu.Item as="a">
				<Link href="/menu">Full Menu</Link>
			</Menu.Item>
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
			<Menu.Item as="a">
				<Link href="/">Contact Us</Link>
			</Menu.Item>
		</Sidebar>
	</DesktopNavSection>
);

export default SidebarMenuVisible;
