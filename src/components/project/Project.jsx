'use client'

import { CardVideo, CardImage } from './CardGallery';
import { BtnNext, BtnPrevious } from './ControlBtn';
import { useState } from 'react';
import "./project.css"

import img1 from '../../assets/img/gallery-1.webp';
import img2 from '../../assets/img/gallery-2.webp';
import img3 from '../../assets/img/gallery-3.webp';
import img4 from '../../assets/img/gallery-4.webp';
import img5 from '../../assets/img/gallery-5.webp';
import img6 from '../../assets/img/gallery-6.webp';
import img7 from '../../assets/img/gallery-7.webp';
import img8 from '../../assets/img/gallery-8.webp';
import img9 from '../../assets/img/gallery-9.webp';
import img10 from '../../assets/img/gallery-10.webp';
import img11 from '../../assets/img/gallery-11.gif';
import img12 from '../../assets/img/gallery-12.gif';

export const Project = () => {
  const cards = [
    {
      id: '1',
      src: img1,
      alt: 'Let you down song, by Dawid Podsiadlo',
      href: 'https://youtu.be/BnnbP7pCIvQ',
      typeCard: 'video'
    },
    {
      id: '2',
      src: img2,
      alt: 'NSFW Trailer',
      href: 'https://www.youtube.com/watch?v=BnnbP7pCIvQ',
      typeCard: 'video'
    },
    {
      id: '3',
      src: img3,
      alt: 'Lucy',
      typeCard: 'image'
    },
    {
      id: '4',
      src: img4,
      alt: 'Cyberpunk Edgerunners Cover',
      typeCard: 'image'
    },
    {
      id: '5',
      src: img5,
      alt: 'Official Trailer',
      href: 'https://www.youtube.com/watch?v=OiR_lMNlJko',
      typeCard: 'video'
    },
    {
      id: '6',
      src: img6,
      alt: 'Inside Look #2',
      href: 'https://youtu.be/D6ia1wjO7sg',
      typeCard: 'video'
    },
    {
      id: '7',
      src: img7,
      alt: 'Opening Credits',
      href: 'https://youtu.be/1gjpuBId3wg',
      typeCard: 'video'
    },
    {
      id: '8',
      src: img8,
      alt: 'Official teaser',
      href: 'https://youtu.be/ARL_JWwKdDs',
      typeCard: 'video'
    },
    {
      id: '9',
      src: img9,
      alt: 'Inside Look #1',
      href: 'https://youtu.be/zxapZWv4pNs',
      typeCard: 'video'
    },
    {
      id: '10',
      src: img10,
      alt: 'Exclusive clip',
      href: 'https://youtu.be/QdjyhM-udis',
      typeCard: 'video'
    },
    {
      id: '11',
      src: img11,
      alt: 'Main, Cyberpunk',
      typeCard: 'image'
    },
    {
      id: '12',
      src: img12,
      alt: 'David and Lucy',
      typeCard: 'image'
    }
  ];

  const firstPage = cards.slice(0, 6);
  const secondPage = cards.slice(6, 12);

  const [page, setPage] = useState(firstPage);
  const [currentPage, setCurrentPage] = useState(1);

  const previousPage = () => {
    if (currentPage === 2) {
      setCurrentPage(currentPage - 1);
      setPage(firstPage);
    }
  };
  const nextPage = () => {
    if (currentPage === 1) {
      setCurrentPage(currentPage + 1);
      setPage(secondPage);
    }
  };

  return (
    <section className="gallery-section">
      <h2 className="gallery-section__title">Gallery</h2>
      <div className="gallery-section__cards-container">
        {page.map((card) => {
          return card.typeCard === "image" ? (
            <CardImage img={card.src} alt={card.alt} key={card.id} />
          ) : (
            <CardVideo img={card.src} alt={card.alt} link={card.href} key={card.id} />
          );
        })}
      </div>
      <footer className="gallery-section__footer">
        <p className="gallery-page">{currentPage}/2</p>
        <div className="gallery-section__footer--btn-container">
          <BtnPrevious handler={previousPage} text="previous" page={currentPage} />
          <BtnNext handler={nextPage} text="next" page={currentPage} />
        </div>
      </footer>
    </section>
  );
};
