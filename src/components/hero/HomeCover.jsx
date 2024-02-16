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
          <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center items-center md:items-start h-full">
              <h2 className="text-4xl sm:text-6xl font-bold text-primary-t text-center">
                {/* I'm a Software Developer */}
                Hi I&apos;m<span className="text-button"> &lt;/</span>Goutam
                Nayak<span className="text-button">/&gt;</span>
              </h2>
              <p className="text-primary-t text-md md:text-xl py-4 pt-5">
                I am a{" "}
                <span className="inline-block border-2 border-border rounded-full font-bold text-lg px-3 py-2 mr-1 md:mr-2 text-white">
                  Web Developer / Graphic Designer
                </span>{" "}
                who likes coding cool stuff for cool people.
              </p>

              <button className="bg-transparent hover:bg-button text-yellow  mt-20 font-semibold hover:text-white py-3 px-6 md:px-8 border border-yellow hover:border-transparent rounded">
                Reach Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="home__bottom-separator-container"></div>
    </section>
  );
};
