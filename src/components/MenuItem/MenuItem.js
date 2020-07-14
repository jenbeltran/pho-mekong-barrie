import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { PhoSizeOptions, SubOptions, AllItemInfo } from './MenuItem.css'

// TOD0: Refactor
const MenuItem = ({item, header}) => {
	const { code, name, price, desc, subOptions } = item;

	// Only A5 and Pho items have supoptions
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
