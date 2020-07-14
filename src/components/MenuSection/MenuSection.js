import React from 'react';
import { ListGroup } from 'reactstrap';
import { Header, Paragraph } from './MenuSection.css.js'
import MenuItem from '../MenuItem/MenuItem.js';

// TODO: install uuid for unique key

// retreives data, props, and renders each item, this component sits below its respective Banner component
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
