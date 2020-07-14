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

const AllItemInfo = styled.section.attrs({
	className: 'item-name-with-code-price'
})`
	display: flex;
	justify-content: space-between;
`

export {PhoSizeOptions, SubOptions, AllItemInfo};