import styled from 'styled-components';

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

const ItemMain = styled.section.attrs({
	className: 'item-name-with-code-price'
})`
	display: flex;
	justify-content: space-between;
`

const ItemDetails = styled.section.attrs({
	className: 'item-details'
})`
	padding-right: 3.5em;
`

export { PhoSizeOptions, SubOptions, ItemMain, ItemDetails };