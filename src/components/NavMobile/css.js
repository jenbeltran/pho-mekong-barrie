import styled from "styled-components"
import { Link } from "gatsby"

import { colors, breakpoints } from "../../theme/constants"

const { paragraphBlack, grey, primaryGreen, white } = colors
const { desktop } = breakpoints

export const StyleNav = styled.section`
  justify-content: center;
  opacity: 0;
  transition: 0.2s opacity;

  width: 0px;
  height: 0px;
  position: fixed;

  @media screen and (min-width: ${desktop}px) {
    display: block;
    margin-bottom: 20px;
    padding: 20px 30px;

    display: flex;
    align-items: center;
    justify-content: start;

    background: ${grey};
    box-shadow: 0px 10px 12px -4px rgba(0, 0, 0, 0.75);

    z-index: 10;
    opacity: 1;

    width: auto;
    height: auto;
    position: relative;
  }
`

export const StyledNavBrand = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 2rem;

  @media screen and (min-width: ${desktop}px) {
    margin-right: auto;
    margin-bottom: 0;
  }

  img {
    width: auto;
    display: block;
    height: 32px;
    @media screen and (min-width: ${desktop}px) {
      height: 30px;
    }
  }
`

export const StyleNavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: auto;
  flex-direction: column;
  padding: 0;

  @media screen and (min-width: ${desktop}px) {
    align-items: center;
    margin: 0;
    flex-direction: row;
  }
`

export const NavListItem = styled.li`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: ${desktop}px) {
    padding: 0;
    margin-right: 55px;
    font-size: 1.1rem;
    text-align: left;
    margin-bottom: 0;
  }
`

export const NavLink = styled(Link)`
  color: ${paragraphBlack};
`

export const NavElement = styled.nav``

export const CheckboxLabel = styled.label`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: ${primaryGreen};

  display: flex;

  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 10;
  pointer: cursor;

  @media screen and (min-width: ${desktop}px) {
    display: none;
  }
`

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
`
export const MobileNavIcon = styled.span`
  height: 2px;
  width: 30px;
  
  display: block;
  background: ${white};
  margin: auto;
  position: relative;

  &::before, &::after {
    content: "";
    display: block;
    background: ${white}
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
`
