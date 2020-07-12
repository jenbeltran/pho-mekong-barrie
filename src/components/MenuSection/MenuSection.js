import React from 'react';
import { ListGroup } from 'reactstrap';
import styled from 'styled-components';
import MenuItem from '../MenuItem/MenuItem.js';

// TODO: install uuid for unique key
// retreives all menu items from a category, props
const Header = styled.header`
	padding: 1em 1em 0em 1em
`
const Paragraph = styled.p`
	padding: 0em 1em
`

const MenuSection = (props) => {
	const { header, list, desc } = props.section;

	const allCategoryItems = list.map((item) => {
		return <MenuItem item={item} header={header} />;
	});

	return (
		<ListGroup>
			<h5 style={{ padding: '1em 1em 0em 1em' }}>{header}</h5>
			<p style={{ padding: '0em 1em 0em 1em' }}>{desc}</p>
			{allCategoryItems}
		</ListGroup>
	);
};

export default MenuSection;
