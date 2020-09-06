import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { PhoSizeOptions, SubOptions, ItemMain, ItemDetails } from './MenuItem.css'
import { v4 as uuidv4 } from 'uuid';
// TOD0: Refactor
const MenuItem = ({ item, header }) => {
	const { code, name, price, desc, subOptions } = item;

	// Only A5 and Pho items have supoptions
	const getAllSubOptions = (allOptions) => {
		return allOptions.map((option) => {
			return <li key={uuidv4()}>{option}</li>;
		});
	};

	return (
		<ListGroupItem key={code} id="item-container">
			<ItemMain>
				<section className="item-name-and-code" style={{paddingRight: '1em', maxWidth: '60%'}}>
					{code}. {name}
				</section>
				{header !== 'Pho' && <section className="price" style={{alignSelf: 'center'}}>{(price / 100).toFixed(2)}</section>}
				{header === 'Pho' &&
				subOptions && (
					<PhoSizeOptions>
							{getAllSubOptions(subOptions)}
					</PhoSizeOptions>
				)}
			</ItemMain>
			<ItemDetails>
				{desc && <article className="description">{desc}</article>}
				{subOptions &&
				header !== 'Pho' && (
					<SubOptions>
						{getAllSubOptions(subOptions)}
					</SubOptions>
				)}
			</ItemDetails>
		</ListGroupItem>
	);
};

export default MenuItem;
