import React from 'react';
import { ListGroup } from 'reactstrap';
import styled from 'styled-components';
import MenuItem from '../MenuItem/MenuItem.js';

// TODO: install uuid for unique key
// retreives all menu items from a category, props
const Header = styled.h4`
	padding: 1em 1em 0em 1em
`
const Paragraph = styled.p`
	padding: 0em 1.5em
`

const MenuSection = (props) => {
	const { header, list, desc } = props.section;

	const allCategoryItems = list.map((item) => {
		return <MenuItem item={item} header={header} />;
	});

	return (
		<ListGroup>
			<Header>{header}</Header>
			<Paragraph>{desc}</Paragraph>
			{allCategoryItems}
		</ListGroup>
	);
};

export default MenuSection;
