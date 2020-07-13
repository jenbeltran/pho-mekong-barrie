import React, {useState} from 'react';
import { Link } from 'gatsby';
import { Menu, Sidebar } from 'semantic-ui-react';

const SidebarMenuVisible = () => {

	const [activeItem, setActiveItem] = useState('fullMenu');

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
			<Menu.Item as="a" name="fullMenu" active={activeItem === 'fullMenu'} onClick={handleItemClick}>Full Menu</Menu.Item>
			<Menu.Item as="a" name="pho" active={activeItem === 'pho'} onClick={handleItemClick}>Pho</Menu.Item>
			<Menu.Item as="a" name="padthai" active={activeItem === 'padthai'} onClick={handleItemClick}>Pad Thai</Menu.Item>
			<Menu.Item as="a" name="vermicelli" active={activeItem === 'vermicelli'} onClick={handleItemClick}>Vermicelli</Menu.Item>
			<Menu.Item as="a" name="appetizers" active={activeItem === 'appetizers'} onClick={handleItemClick}>Appetizers</Menu.Item>
			<Menu.Item as="a" name="rice" active={activeItem === 'rice'} onClick={handleItemClick}>Steamed Rice Dishes</Menu.Item>
			<Menu.Item as="a" name="friedRice" active={activeItem === 'friedRice'} onClick={handleItemClick}>Fried Rice Dishes</Menu.Item>
			<Menu.Item as="a" name="noodleSoups" active={activeItem === 'noodleSoups'} onClick={handleItemClick}>Noodle Soups</Menu.Item>
			<Menu.Item as="a" name="smallSoups" active={activeItem === 'smallSoups'} onClick={handleItemClick}>Small Soups</Menu.Item>
			<Menu.Item as="a" name="stirFryNoodles" active={activeItem === 'stirFryNoodles'} onClick={handleItemClick}>Stir-fry Noodles</Menu.Item>
			<Menu.Item as="a" name="sig" active={activeItem === 'sig'} onClick={handleItemClick}>Signature Dishes</Menu.Item>
			<Menu.Item as="a" name="congee" active={activeItem === 'congee'} onClick={handleItemClick}>Congee</Menu.Item>
			<Menu.Item as="a" name="curry" active={activeItem === 'curry'} onClick={handleItemClick}>Curry</Menu.Item>
			<Menu.Item as="a" name="salads" active={activeItem === 'salads'} onClick={handleItemClick}>Salads</Menu.Item>
			<Menu.Item as="a" name="beverages" active={activeItem === 'beverages'} onClick={handleItemClick}>Beverages</Menu.Item>
			<Menu.Item as="a">
				<Link href="/">Contact Us</Link>
			</Menu.Item>
	</Sidebar>
	)
	
};

export default SidebarMenuVisible;
