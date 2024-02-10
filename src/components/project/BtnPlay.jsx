import playicon from '../../assets/img/play-icon.svg';
import "./buttons-card.css"
import Image from 'next/image';

export const BtnPlay = ({link}) => {
  return (
    <a className="btn-play" href={link} target="_blank">
    <Image src={playicon} alt="play icon" />
    </a>
  );
};
