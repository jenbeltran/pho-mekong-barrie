import React from 'react';
import { BannerHeader, BannerImg, BannerSection, Desc } from './Banner.css.js'

// TODO: Pass the src as props to styled component, it is currently hardcoded
// Currently the BannerHeader and Desc are hardcoded, make this take props to make it reusable

// This commponent is the top section of the content
const Banner = ({activeItem}) => {
  
  return(
    <section>
      <BannerImg />
      <BannerSection>
        <BannerHeader>Pho</BannerHeader>
      </BannerSection>
      <Desc>
				Pho is a popular Vietnamese noodle soup. Beef bones are simmered for many hours in combination with herbs and spices that help to bring out the flavour. It is served with traditional rice noodles and your choice of meat, or vegetables. Topped with green and white onions and black pepper.
				</Desc>

    </section>
  )
}

export default Banner;