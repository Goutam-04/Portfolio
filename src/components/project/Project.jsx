'use client'

import { Fade, Slide } from 'react-awesome-reveal';
import ProjectCard from './ProjectCard';
import "./project.css";

const Project = ({ title, data }) => {
  return (
    <section id="projects" className='grid gap-8 p-5 mt-5 md:p-0 justify-center items-center'>
      <div className='text-xl font-medium mt-2 text-primary-t mb-5 text-center'>
        {title}
      </div>
      <div className='text-primary-t grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5'>
        {data.map((card, index) => (
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
    </section>
  );
};

export default Project;
