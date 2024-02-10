// import { BtnPlay } from './BtnPlay';
// import { Facebook, Instagram, Twitter } from './Icons';

// import cdpred from '../../assets/img/logo-cdpred.svg';
import trigger from '../../assets/img/logo-trigger.svg';
import xMark from '../../assets/img/x-mark.svg';
import logoEdgerunners from '../../assets/img/logo-edgerunners.webp';
import Image from 'next/image';


import "./homecover.css"

export const HomeCover = () => {
  return (
    <section className="home">
      <div className="home__cover"></div>

      <div className="home__main-container">
        <div className="home__top-line-container">
          <p>(cyberpunk edgerunners) - c 9957.2451</p>
        </div>

        <div className="home__logos-container">
          {/* <a href="https://cdprojektred.com" target="_blank">
            <Image src={xMark} alt="x mark" width={100} height={100} />
          </a>
          <Image src={xMark} alt="x mark" width={100} height={100} />
          <a href="https://www.st-trigger.co.jp" target="_blank">
            <Image src={xMark} alt="x mark" width={100} height={100} />
          </a> */}
        </div>

        <div className="home__content-container">
          <Image
            className="home__content-container--logo-edgerunners"
            src={logoEdgerunners}
            alt="Logo Edgerunners"
            // width={100}
            // height={100}
          />
        </div>
      </div>

      <div className="home__bottom-separator-container"></div>
    </section>
  );
};
