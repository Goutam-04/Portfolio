"use client";

import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { Zoom, Fade } from "react-awesome-reveal";
import { Suspense } from "react";
import Link from "next/link";

import "./homecover.css";


export const HomeCover = () => {
  const TEXTS = ["Engineer", "UI/UX Desiner", "Option Trader", "Freelancer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Use setInterval to update the index every 3 seconds
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 3000); // Every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="home">
      <div className="home__cover"></div>

      <div className="home__main-container">
        <div className="home__top-line-container">
          <p>(need contribution on github) - c 9957.2451</p>
        </div>

        {/* MAIN HOME PART */}
        <div className=" w-full">
          <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center items-center lg:items-start h-full">
              <h2 className="text-4xl lg:text-6xl font-bold text-primary-t text-center">
                {/* I'm a Software Developer */}
                Hi I&apos;m
                <br className="lg:hidden inline" />
                <span className="text-button text-2xl lg:text-6xl sm:text-5xl">
                  {" "}
                  &lt;/
                </span>
                <span className="text-xl lg:text-6xl sm:text-5xl">
                  Goutam Nayak
                </span>
                <span className="text-button text-2xl lg:text-6xl sm:text-5xl">
                  /&gt;
                </span>
              </h2>


<Suspense>

              <div className="text-primary-t text-sm md:text-xl py-4 pt-5 text-center">
                I am a<br className="lg:hidden inline" />{" "}
                <div className="inline-flex items-center font-bold text-sm lg:text-base px-0.5 lg:px-1 py-0.25 md:py-0.5 mr-0.5 lg:mr-1 text-white border-none border-border rounded-full md:border-2">
                  <div className="inline-block ">
                    Full-Stack Developer /&nbsp;
                    <TextTransition
                      springConfig={presets.wobbly}
                      direction="down"
                      inline="false"
                      delay={0}
                    >
                      {TEXTS[index % TEXTS.length]}
                    </TextTransition>
                  </div>
                </div>
                <br className="sm:hidden inline" /> who likes coding cool stuff
                for cool people.
              </div>

</Suspense>
              <Link href="#contact">
                <button className="bg-transparent hover:bg-button text-yellow  mt-12 lg:mt-16 font-semibold hover:text-white py-3 px-6 lg:px-8 border border-yellow hover:border-transparent rounded ">
                  Reach Out
                </button>
              </Link>
              <button
                className="visible md:invisible hover:bg-transparent bg-button hover:text-yellow  mt-4 lg:mt-16 font-semibold text-white py-3 px-8  border hover:border-yellow border-transparent rounded"
                onClick={() => {
                  window.open("/resume.pdf", "_blank");
                }}
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="home__bottom-separator-container"></div>
    </section>
  );
};
