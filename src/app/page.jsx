import { HomeCover } from "@/components/hero/HomeCover";
import {Start} from "@/components/start/Start"
import styles from "./homepage.module.css";
import { Skills } from "@/components/skills/Skills";
import { Project } from "@/components/project/Project";

export default function Home() {
  return (
    <>
      <HomeCover/>
      <Start/>
      <Skills/>
      <Project/>
    </>
  );
}
