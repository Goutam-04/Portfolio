import {
  Code,
  Flame,
  Github,
  Home,
  Image as ImageIcon,
  Instagram,
  Mail,
  Linkedin,
  Twitter,
  Video,
  X,
} from "lucide-react";
import List from "./List";
import { useMenu } from "../../provider/Provider";
import { Link } from "react-feather";

const Menu = () => {
  const { showMenuVisibility } = useMenu();

  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  const handleXButtonClick = (e) => {
    // Prevent the event from propagating to the parent container
    e.stopPropagation();
    // Close the menu
    showMenuVisibility(false);
  };

  return (
    <div
      className="flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5 bg-primary"
      onClick={() => showMenuVisibility(false)}
    >
      {/* THAT X BUTTON FOR CLOSING */}
      <div className="block lg:hidden p-5 z-10 text-primary-t absolute right-0 top-0 cursor-pointer text-2xl">
        <X className={`text-primary-t`} onClick={handleXButtonClick} />
      </div>

      {/*  resume button design*/}
      <button
        className="bg-transparent hover:bg-button text-yellow lg:mt-0 mt-20 font-semibold hover:text-white py-2 px-4 border border-yellow hover:border-transparent rounded"
        onClick={handleResumeClick}
      >
        Resume
      </button>
      {/* List 1 */}
      <List link="#home" effect="slideUp">
        <Home /> Home
      </List>
      <List link="#skills" effect="slideUp">
        <Flame /> Skills
      </List>
      <List link="#projects" effect="slideUp">
        <Code /> Projects
      </List>
      <List link="#contact" effect="slideUp">
        <Video /> Contact
      </List>

      {/* List 2 */}
      <div className="mt-5">Socials</div>

      <List
        target="_blank"
        link="https://github.com/Goutam-04"
        effect="slideUp"
      >
        <Github color="#2a9d8f" /> Github
      </List>

      <List
        target="_blank"
        link="https://twitter.com/Goutam_004"
        effect="slideUp"
      >
        <Twitter color="#1DA1F2" /> Twitter
      </List>
      <List
        target="_blank"
        link="https://mail.google.com/mail/?view=cm&fs=1&su=SubjectText&body= You can contact me at goutamnayak2804@gmail.com. Thank you!"
        effect="slideUp"
      >
        <Mail color="#e63946" /> Gmail
      </List>

      <List
        target="_blank"
        link="https://www.linkedin.com/in/goutam-kumar-nayak/"
        effect="slideUp"
      >
        <Linkedin color="#0277b5" absoluteStrokeWidth="false" strokeWidth="4" />{" "}
        Linkedin
      </List>
      <List
        target="_blank"
        link="https://www.instagram.com/goutam.kumarnayak/"
        effect="slideUp"
      >
        <Instagram color="#b5179e" /> Instagram
      </List>
    </div>
  );
};

export default Menu;
