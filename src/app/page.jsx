import { HomeCover } from "@/components/hero/HomeCover";
import {Start} from "@/components/start/Start"
import styles from "./homepage.module.css";
import  Skills  from "@/components/skills/Skills";
import  Project  from "@/components/project/Project";

import { projectData } from '../components/project/data';

export default function Home() {
  return (
    
      <div >

      
      <HomeCover/>
      {/* <Start/> */}
      <Skills/>
      <Project title="Projects" data={projectData} />

    </div>
  );
}
