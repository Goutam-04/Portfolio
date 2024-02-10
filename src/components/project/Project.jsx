import { createElement as e } from 'react';
import ProjectCard from './ProjectCard';
import { projectData } from './data';

const Project = ({ title, data }) => {
  return (
    e('section', { className: 'grid gap-8 p-5 mt-5 md:p-0' },
      e('div', { className: 'text-xl font-medium text-zinc-200' }, title),
      e('div', { className: 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5' },
        data.map((card) => (
          e(ProjectCard, {
            href: card.href,
            key: card.id,
            title: card.title,
            src: card.imageUrl,
            techStack: card.techStack
          })
        ))
      )
    )
  );
};

export default Project;
