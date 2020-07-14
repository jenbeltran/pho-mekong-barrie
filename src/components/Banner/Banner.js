import React from 'react';
import { BannerHeader, BannerImg, BannerSection } from './Banner.css.js'
import BannerData from './data.js';

// TODO: Pass the src as props to styled component, it is currently hardcoded
// Currently the BannerHeader and Desc are hardcoded, make this take props to make it reusable

// This commponent is the top section of the content
const Banner = ({activeItem}) => {
  const currentImg = BannerData[activeItem][img];
  console.log(currentImg)
  return(
    <section>
      <BannerImg currentImg={currentImg}/>
      <BannerSection>
      <BannerHeader>{activeItem}</BannerHeader>
      </BannerSection>
    </section>
  )
}

export default Banner;