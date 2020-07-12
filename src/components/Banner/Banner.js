import React from 'react';
import PhoBanner from '../images/test-banner-pho.jpeg';
import styled from 'styled-components';

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
    <img src={PhoBanner} alt="banner" style={{objectFit: 'none',
      height: '16em', width: '100%', objectPosition: '75% 40%', filter: 'brightness(0.8) opacity(0.6)'}}></img>
  )
}

export default Banner;