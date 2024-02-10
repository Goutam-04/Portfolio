import { createElement as e } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsCard = ({ title, src, href, techStack }) => {
  return (
    e(Link, { target: "_blank", href: href || '/' },
      e('div', { className: 'flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis' },
        e(Image, {
          src: `/projects/${src}`,
          alt: "spotify",
          width: 700,
          height: 700,
          className: "aspect-video object-cover"
        }),
        e('div', { className: 'flex flex-col px-4 py-2 h-24' },
          e('div', { className: 'flex font-bold' }, title),
          e('div', { className: 'flex text-info text-xs' }, techStack)
        )
      )
    )
  );
};

export default ProjectsCard;
