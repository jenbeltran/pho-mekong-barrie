import React from 'react';
import { Link } from 'gatsby';
import { Menu, Sidebar } from 'semantic-ui-react';

const SidebarMenuVisible = ({activeItem, setActiveItem}) => {

	const handleItemClick = (evt, {name}) => {
		setActiveItem(name);
	};

	return (
		<Sidebar as={Menu} animation="push" icon="labeled" inverted vertical visible>
			<Menu.Item as="a">
				<Link href="/">Pho Mekong</Link>
			</Menu.Item>
			<Menu.Item as="a">
				<Link href="/menu">Popular Items</Link>
			</Menu.Item>
			<Menu.Item as="a" name="fullMenu" active={activeItem === 'fullMenu'} onClick={handleItemClick}>Full Menu</Menu.Item>
			<Menu.Item as="a" name="Pho" active={activeItem === 'Pho'} onClick={handleItemClick}>Pho</Menu.Item>
			<Menu.Item as="a" name="Pad Thai" active={activeItem === 'Pad Thai'} onClick={handleItemClick}>Pad Thai</Menu.Item>
			<Menu.Item as="a" name="Vermicelli" active={activeItem === 'Vermicelli'} onClick={handleItemClick}>Vermicelli</Menu.Item>
			<Menu.Item as="a" name="Appetizers" active={activeItem === 'Appetizers'} onClick={handleItemClick}>Appetizers</Menu.Item>
			<Menu.Item as="a" name="Steamed Rice Dishes" active={activeItem === 'Steamed Rice Dishes'} onClick={handleItemClick}>Steamed Rice Dishes</Menu.Item>
			<Menu.Item as="a" name="Fried Rice Dishes" active={activeItem === 'Fried Rice Dishes'} onClick={handleItemClick}>Fried Rice Dishes</Menu.Item>
			<Menu.Item as="a" name="Noodle Soups" active={activeItem === 'Noodle Soups'} onClick={handleItemClick}>Noodle Soups</Menu.Item>
			<Menu.Item as="a" name="Small Soups" active={activeItem === 'Small Soups'} onClick={handleItemClick}>Small Soups</Menu.Item>
			<Menu.Item as="a" name="Stir-fry Noodles" active={activeItem === 'Stir-fry Noodles'} onClick={handleItemClick}>Stir-fry Noodles</Menu.Item>
			<Menu.Item as="a" name="Signature Dishes" active={activeItem === 'Signature Dishes'} onClick={handleItemClick}>Signature Dishes</Menu.Item>
			<Menu.Item as="a" name="Congee" active={activeItem === 'Congee'} onClick={handleItemClick}>Congee</Menu.Item>
			<Menu.Item as="a" name="Curry" active={activeItem === 'Curry'} onClick={handleItemClick}>Curry</Menu.Item>
			<Menu.Item as="a" name="Salads" active={activeItem === 'Salads'} onClick={handleItemClick}>Salads</Menu.Item>
			<Menu.Item as="a" name="Beverages" active={activeItem === 'Beverages'} onClick={handleItemClick}>Beverages</Menu.Item>
			<Menu.Item as="a">
				<Link href="/">Contact Us</Link>
			</Menu.Item>
	</Sidebar>
	)
	
};

export default SidebarMenuVisible;
