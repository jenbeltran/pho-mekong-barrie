import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyleNav = styled.section`
	@media screen and (min-width: 481px) {
		display: none;
	}
	@media screen and (max-width: 480px) {
		justify-content: center;
		opacity: 0;
		transition: 0.2s opacity;

		width: 0px;
		height: 0px;
		position: fixed;
	}
`;

export const StyledNavBrand = styled.div`
	display: flex;
	justify-content: center;

	margin-bottom: 2rem;

	img {
		width: auto;
		display: block;
		height: 85px;
	}
`;

export const StyleNavLinks = styled.ul`
	display: flex;
	list-style: none;
	margin: auto;
	flex-direction: column;
	padding: 0;
`;

export const NavListItem = styled.li`
	text-align: center;
	font-size: 2rem;
	margin-bottom: 2rem;
`;

export const NavLink = styled(Link)`
color: black;
`;

export const NavElement = styled.nav``;

export const CheckboxLabel = styled.label`
	@media screen and (max-width: 480px) {
		height: 60px;
		width: 60px;
		border-radius: 50%;
		background-color: #00999f;

		display: flex;

		position: fixed;
		right: 10px;
		top: 10px;
		z-index: 10;
		pointer: cursor;
	}
`;

export const CheckboxInput = styled.input`
  visibility: hidden;
  position: absolute;
  left: -9999px;

  &:checked + section {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: white;
    z-index: 9;

    opacity: 1;
    width: 100%;
    height 100%;
  }
`;
export const MobileNavIcon = styled.span`
  height: 2px;
  width: 30px;
  
  display: block;
  background: white;
  margin: auto;
  position: relative;

  &::before, &::after {
    content: "";
    display: block;
    background: white
    width: 30px;
    height: 2px;
    position: absolute;
  }

  &::before {
    top: 10px;
  }

  &::after {
    bottom: 10px;
  }
`;
