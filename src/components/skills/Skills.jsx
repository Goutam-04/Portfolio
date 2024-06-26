"use client";

import { Fade } from "react-awesome-reveal";
import TechCard from "./TechCard";

const Skills = ({}) => {
  return (
    <div id="skills" className=" col-span-2 p-6 md:col-span-2 lg:col-span-3 ">
      <div className="text-xl font-medium mt-2 text-primary-t mb-5 text-center">
        Skills I Have
      </div>

      <Fade direction="down" triggerOnce>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <TechCard
            title="Frontend"
            classaName="bg-[#4f91f2]"
            tech={[
              "HTML5",
              "CSS",
              "Tailwind",
              "Javascript",
              "React Js",
              "Next Js 13",
              "React-Router",
            ]}
          />
          <TechCard
            title="Backend"
            classaName="bg-[#f37c36]"
            tech={["Node Js", "Express Js", "Next Auth", "Socket IO", "Razorpay","NPM package"]}
          />
          <TechCard
            title="Database"
            classaName="bg-[#e0558a]"
            tech={["MongoDB", "Mongoose", "MySQL"]}
          />
          <TechCard
            title="Devops"
            classaName="bg-[#10c0a2]"
            tech={["Docker", "Kubernetes", "GIT"]}
          />
          <TechCard
            title="Tools"
            classaName="bg-[#e0558a]"
            tech={["Postman", "Linux OS", "Canva", "Adobe XD"]}
          />
        </div>
      </Fade>

    </div>
  );
};

export default Skills;
