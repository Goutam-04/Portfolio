// import { BtnPlay } from './BtnPlay';
// import { Facebook, Instagram, Twitter } from './Icons';

// import cdpred from '../../assets/img/logo-cdpred.svg';
// import trigger from "../../assets/img/logo-trigger.svg";
// import xMark from "../../assets/img/x-mark.svg";
import logoEdgerunners from "../../assets/img/logo-edgerunners.webp";
import Image from "next/image";

import "./homecover.css";

export const HomeCover = () => {
  return (
    <section className="home">
      <div className="home__cover"></div>

      <div className="home__main-container">
        <div className="home__top-line-container">
          <p>(cyberpunk edgerunners) - c 9957.2451</p>
        </div>

        {/* MAIN HOME PART */}
        <div className=" w-full">
          <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center items-center h-full">
              <h2 className="text-4xl sm:text-6xl font-bold text-white">
                {/* I'm a Software Developer */}
                I&apos;m a Software Developer
              </h2>
              <p className="text-gray-300 text-lg md:text-xl py-4 pt-5 max-w-md">
                I am a Btech undergraduate who love to build and desgin
                software. Currently, I am working on web application using
                technologies like React and Tailwind.
              </p>
            </div>

            <div>
              <Image
                src={logoEdgerunners}
                alt="my profile"
                className="md:rounded-s-full ml-8 max-h-full md:max-h-screen w-4/5 md:w-full overflow-hidden"
              />
            </div>
          </div>
        </div>

      </div>

      <div className="home__bottom-separator-container"></div>
    </section>
  );
};
