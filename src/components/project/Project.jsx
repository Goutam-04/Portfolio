'use client'

import { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import ProjectCard from './ProjectCard';
import "./project.css";

const Project = ({ title, data }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <section id="projects" className='grid gap-8 p-5 mt-5 md:p-0 justify-center items-center'>
      <div className='text-xl font-medium mt-2 text-primary-t mb-5 text-center'>
        {title}
      </div>
      <div className='text-primary-t grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5'>
        {data.slice(0, visibleCount).map((card, index) => (
          <Fade 
            key={card.id}
            direction="left"
            delay={index * 250} 
            cascade
          >
            <ProjectCard
              href={card.href}
              demo={card.demo}
              title={card.title}
              src={card.imageUrl}
              techStack={card.techStack}
            />
          </Fade>
        ))}
      </div>
      {visibleCount < data.length && (
        <div className='flex justify-center mt-0'>
          <button 
            onClick={loadMore}
            className='px-4 py-2 bg-secondary text-white rounded-md hover:bg-button transition duration-300'
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Project;
