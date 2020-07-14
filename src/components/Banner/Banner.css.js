import styled from 'styled-components';
import PhoBanner from '../../images/test-banner-pho.jpeg';

// TODO: Pass the src as props to styled component, it is currently hardcoded
// Currently the BannerHeader and Desc are hardcoded, make this take props to make it reusable

const BannerImg = styled.img.attrs({
  src: PhoBanner,
  alt: 'banner'
})`
  object-fit: none;
  height: 16em;
  width: 101%;
  object-position: 75% 40%;
  filter: brightness(0.8) opacity(0.6);
`

const BannerSection = styled.div.attrs({
	className: 'pusher'
})`
	display: flex;
	justify-content: center;
`
const BannerHeader = styled.h1`
	position: absolute;
	top: 4em;
	transform: translateX(3em);
`
const Desc = styled.section`
	text-align: justify;
	display: flex;
	align-items: center;
	margin: 1em 2em 0 13em;
	min-height: 3em;
`

export { BannerHeader, BannerImg, BannerSection, Desc }