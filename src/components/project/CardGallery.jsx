import { BtnPlay } from './BtnPlay';
import "./buttons-card.css"
import Image from 'next/image';

const CardVideo = ({ img, alt, link }) => {
  return (
    <div className="gallery-section__cards-container--card-video">
      <span className='corner-transparent'></span>
      <Image className="card--img" src={img} alt={alt} />
      
    </div>
  );
};

const CardImage = ({ img, alt }) => {
  return (
    <div className="gallery-section__cards-container--card-img">
      <span className='corner-transparent'></span>
      <Image className="card--img" src={img} alt={alt} />
    </div>
  );
};

export { CardVideo, CardImage };