import { HomeCover } from "@/components/hero/HomeCover";

import styles from "./homepage.module.css";
import  Skills  from "@/components/skills/Skills";
import  Project  from "@/components/project/Project";
import Card from "@/components/card/Card";
import  Contact  from "@/components/contact/Contact";
import  Footer  from "@/components/footer/Footer";
import Link from "next/link";


import { projectData } from '../components/project/data';

export default function Home() {
  return (
    
      <div >

      
      <HomeCover/>
      {/* <Start/> */}
      <Skills/>
      <Project  title="Projects" data={projectData} />
      <Contact/>

      {/* <Card/> */}
      {/* <Footer/> */}

    </div>
  );
}
