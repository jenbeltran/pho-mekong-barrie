import React from 'react';
import PhoBanner from '../../images/test-banner-pho.jpeg';
import styled from 'styled-components';

// TODO: Pass the src as props to styled component, it is currently hardcoded
// Separate styled comp to a diff file
const BannerImg = styled.img.attrs({
  src: PhoBanner,
  alt: 'banner'
})`
  object-fit: none;
  height: 16em;
  width: 100%;
  object-position: 75% 40%;
  filter: brightness(0.8) opacity(0.6);
`

const Banner = () => {
  
  return(
    <BannerImg />
  )
}

export default Banner;