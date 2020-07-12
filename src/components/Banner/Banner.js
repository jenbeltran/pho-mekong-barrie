import React from 'react';
import PhoBanner from '../images/test-banner-pho.jpeg';

const Banner = () => {
  // TO-DO: Center content container
  return(
    <img src={PhoBanner} alt="banner" style={{objectFit: 'none',
      height: '16em', width: '100%', objectPosition: '75% 40%', filter: 'brightness(0.8) opacity(0.6)'}}></img>
  )
}

export default Banner;