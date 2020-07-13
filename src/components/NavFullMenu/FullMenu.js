import React, {useState} from 'react';
import { Link } from 'gatsby';
import { Menu, Sidebar } from 'semantic-ui-react';

const SidebarMenuVisible = () => {

	const [activeItem, setActiveItem] = useState('');

	const handleItemClick = (evt, {name}) => {
		setActiveItem(name);
		console.log('it works')
	};

	return (
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
			<Menu.Item as="a" name="pho" active={activeItem === 'pho'} onClick={handleItemClick}>Pho</Menu.Item>
			<Menu.Item as="a" name="padthai" active={activeItem === 'padthai'} onClick={handleItemClick}>Pad Thai</Menu.Item>
			<Menu.Item as="a" name="">Vermicelli</Menu.Item>
			<Menu.Item as="a" name="">Appetizers</Menu.Item>
			<Menu.Item as="a" name="">Steamed Rice Dishes</Menu.Item>
			<Menu.Item as="a" name="">Fried Rice Dishes</Menu.Item>
			<Menu.Item as="a" name="">Noodle Soups</Menu.Item>
			<Menu.Item as="a" name="">Small Soups</Menu.Item>
			<Menu.Item as="a" name="">Stir-fry Noodles</Menu.Item>
			<Menu.Item as="a" name="">Signature Dishes</Menu.Item>
			<Menu.Item as="a" name="">Congee</Menu.Item>
			<Menu.Item as="a" name="">Curry</Menu.Item>
			<Menu.Item as="a" name="">Salads</Menu.Item>
			<Menu.Item as="a" name="">Beverages</Menu.Item>
			<Menu.Item as="a">
				<Link href="/">Contact Us</Link>
			</Menu.Item>
	</Sidebar>
	)
	
};

export default SidebarMenuVisible;
