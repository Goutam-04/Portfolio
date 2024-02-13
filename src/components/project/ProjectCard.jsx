import React from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

export default function ProjectsCard({ title, src, href, techStack }) {
  return (
    <Card className="py-4 border-2 border-gray-300 rounded-lg overflow-hidden" style={{ width: '290px', height: '430px' }}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex flex-col justify-center items-center" style={{ minHeight: 'calc(100% - 104px)' }}>
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={`/projects/${src}`}
          width={270}
          height={200} 
          style={{ width: '100%', height: '200px' }} // Override width and height
        />
        <small className="text-default-500 text-center">{techStack}</small>
      </CardBody>
      

      {/* THOSE TWO BUTTONS */}
      <div className="flex gap-10 flex-row justify-center items-center mt-1">
      <a href={href} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      Code
    </a>

    <a href={href} target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Demo
    </a>
</div>

    </Card>
  );
}







// 'use client'

// import { createElement as e } from 'react';
// import Link from 'next/link';
// // import Image from 'next/image';
// import React from "react";
// import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

// const ProjectsCard = ({ title, src, href, techStack }) => {
//   return (
//     e(Link, { target: "_blank", href: href || '/' },
//       e('div', { className: 'flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis' },
//         e(Image, {
//           src: `/projects/${src}`,
//           alt: "spotify",
//           width: 700,
//           height: 700,
//           className: "aspect-video object-cover"
//         }),
//         e('div', { className: 'flex flex-col px-4 py-2 h-24' },
//           e('div', { className: 'flex font-bold' }, title),
//           e('div', { className: 'flex text-info text-xs' }, techStack)
//         )
//       )
//     )
//   );
// };

// export default ProjectsCard;
