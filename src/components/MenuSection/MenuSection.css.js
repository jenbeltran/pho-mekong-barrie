import styled from 'styled-components';

const Paragraph = styled.p.attrs({
	id: 'section-description'
})`
	padding: 1rem 1.25em 0em 1.25em;
	margin-bottom: 0;
	min-height: 3em;
	text-align: justify;
	display: flex;
	align-items: center;
	line-height: 1.9em;
`

const FullMenuSubHeader = styled.h1`
	padding-left: 0.5em; 
	padding-top: 1rem; 
	margin-bottom: 0em;
`

export { Paragraph, FullMenuSubHeader };
