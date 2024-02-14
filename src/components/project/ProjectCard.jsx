import React from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

export default function ProjectsCard({ title, src, href, techStack,demo }) {
  return (
    <Card className="py-4 border-2 border-gray-300 rounded-lg overflow-hidden" style={{ width: '290px', height: '450px' }}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
        <p className="text-tiny uppercase font-bold text-center">{title}</p>
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

    <a href={demo} target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      Demo
    </a>
</div>

    </Card>
  );
}

