import React from 'react';
import { ListGroup } from 'reactstrap';
import { Paragraph, FullMenuSubHeader } from './MenuSection.css.js'
import MenuItem from '../MenuItem/MenuItem.js';
import { uuid } from 'uuidv4';

// retreives data, props, and renders each item, this component sits below its respective Banner component
const MenuSection = (props) => {
	const { header, list, desc } = props.section;

	const allCategoryItems = list.map((item) => {
		return <MenuItem key={uuid()} item={item} header={header} />;
	});

	return (
		<ListGroup>
			{props.activeItem === "Full Menu" && <FullMenuSubHeader>{header}</FullMenuSubHeader>}
			{desc && <Paragraph>{desc}</Paragraph>}
			<section style={{paddingTop: '1em'}}>
				{allCategoryItems}
			</section>
		</ListGroup>
	);
};

export default MenuSection;
