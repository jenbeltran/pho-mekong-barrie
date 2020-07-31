import React from 'react';
import { BannerHeader, BannerImg, BannerSection } from './Banner.css.js'
import BannerData from '../Banner/data';

// This commponent is the top section of the content
const Banner = ({activeItem}) => {

  return(
    <section id="banner-title" >
      <BannerImg alt={`${activeItem} Banner`} currentImg={BannerData[activeItem].img}/>
      <BannerSection>
        <BannerHeader>{activeItem}</BannerHeader>
      </BannerSection>
    </section>
  )
}

export default Banner;