import styled from 'styled-components';
import PhoBanner from '../../images/test-banner-pho.jpeg';
import BannerData from './data.js';

const BannerImg = styled.img.attrs(props => ({
  src: props.currentImg || PhoBanner,
  alt: 'banner'
}))`
  object-fit: cover;
  height: 16em;
  width: 101%;
  object-position: 75% 40%;
  filter: brightness(0.8) opacity(0.6);
`;

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

export { BannerHeader, BannerImg, BannerSection }