import React from 'react';
import { BannerHeader, BannerImg, BannerSection } from './Banner.css.js'
import BannerData from './data.js';

// This commponent is the top section of the content
const Banner = ({activeItem}) => {
  
  return(
    <section style={{minHeight: '16em'}}>
      <BannerImg currentImg={BannerData[activeItem].img}/>
      <BannerSection>
      <BannerHeader>{activeItem}</BannerHeader>
      </BannerSection>
    </section>
  )
}

export default Banner;