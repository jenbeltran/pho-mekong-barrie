import styled from 'styled-components';
import PhoBanner from '../../images/test-banner-pho.jpeg'; // default banner

const BannerImg = styled.img.attrs(props => ({
  src: props.currentImg || PhoBanner,
  alt: 'banner',
  id: 'banner-img'
}))`
  object-fit: cover;
  height: 16em;
  width: 101%;
  object-position: 75% 40%;
  filter: brightness(0.8) opacity(0.6);
`;

const BannerSection = styled.div.attrs({
  id: 'banner-section'
})`
	display: flex;
	justify-content: center;
`
const BannerHeader = styled.h1.attrs({
  id: 'banner-header'
})`
  text-transform: uppercase;
	position: absolute;
  top: 6rem;
  font-size: 5vw;
  transform: translateX(11vh);
  text-align: center;
`

export { BannerHeader, BannerImg, BannerSection }