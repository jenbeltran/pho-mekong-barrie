import React from 'react';
import { ListGroupItem } from 'reactstrap';
import styled from 'styled-components';
import { Item } from 'semantic-ui-react';

// TOD0: Refactor

const PhoSizeOptions = styled.ul`
	padding: inherit;
	display: flex;
	list-style: none;
	justify-content: space-between;
	width: 40%;
` 
const SubOptions = styled.ul`
	padding: initial;
	display: flex; 
	list-style: none; 
	justify-content: space-between;
`

const AllItemInfo = styled.section.attrs({
	className: 'item-name-with-code-price'
})`
	display: flex;
	justify-content: space-between;
`

const MenuItem = ({item, header}) => {
	const { code, name, price, desc, subOptions } = item;

	// If the item has sub options. Fresh salad rolls(A5) has 4 types
	const getAllSubOptions = (allOptions) => {
		return allOptions.map((option) => {
			return <li>{option}</li>;
		});
	};

	return (
		<ListGroupItem key={code}>
			<AllItemInfo>
				<section className="item-name-and-code">
					{code}. {name}
				</section>
				{header !== 'Pho' && <section className="price">{(price / 100).toFixed(2)}</section>}
				{header === 'Pho' &&
				subOptions && (
					<PhoSizeOptions>
							{getAllSubOptions(subOptions)}
					</PhoSizeOptions>
				)}
			</AllItemInfo>
			{desc && <article className="description">{desc}</article>}
			{subOptions &&
			header !== 'Pho' && (
				<SubOptions>
					{getAllSubOptions(subOptions)}
				</SubOptions>

			)}
		</ListGroupItem>
	);
};

export default MenuItem;
