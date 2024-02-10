import { BtnPlay } from './BtnPlay';
import "./buttons-card.css"

const CardVideo = ({ img, alt, link }) => {
  return (
    <div className="gallery-section__cards-container--card-video">
      <span className='corner-transparent'></span>
      <img className="card--img" src={img} alt={alt} />
      <BtnPlay link={link} />
    </div>
  );
};

const CardImage = ({ img, alt }) => {
  return (
    <div className="gallery-section__cards-container--card-img">
      <span className='corner-transparent'></span>
      <img className="card--img" src={img} alt={alt} />
    </div>
  );
};

export { CardVideo, CardImage };