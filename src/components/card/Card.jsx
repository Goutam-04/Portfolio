'use client'


import { useState } from 'react';
import Image from 'next/image';
import "./card.css"

const CardVideo = ({ img, alt, link }) => {
    return (
      <div className="gallery-section__cards-container--card-video">
        <span className='corner-transparent'></span>
        {/* <Image className="card--img" src={`/projects/${img}`} alt={alt} /> */}
        {/* <BtnPlay link={link} /> */}
      </div>
    );
  };

 const Card = () => {
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


  const firstPage = cards.slice(0,3);
  const secondPage = cards.slice(3,12);

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
     
            <CardVideo img={card.src} alt={card.alt} link={card.href} key={card.id} />
          
        })}
      </div>
    </section>
  );
};

export default Card;