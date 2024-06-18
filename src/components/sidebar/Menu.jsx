import List from "./List";
import { useMenu } from "../../provider/Provider";
import { RiCloseLargeFill, RiCodeSSlashLine, RiContactsLine, RiFireLine, RiGithubFill, RiHomeSmileLine,  RiInstagramLine, RiLinkedinBoxFill, RiMailSendFill, RiMenuFoldFill, RiTwitterXFill } from "@remixicon/react";
import { Fade, Slide} from "react-awesome-reveal";

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
        <RiCloseLargeFill className={`text-primary-t`} onClick={handleXButtonClick} />
      </div>
      
      {/* <button
       className="invisible md:visible bg-transparent hover:bg-button text-yellow  font-semibold hover:text-white md:mt-20 lg:mt-0 mb-4 py-2 px-3 border border-yellow hover:border-transparent rounded"
       onClick={handleResumeClick}
     >
       Resume
     </button> */}
      <button
       className="invisible md:visible  md:mt-20 lg:mt-0 mb-4 bg-transparent text-purple-600  font-semibold text-center  relative  px-6 py-3 overflow-hidden hover:text-white   rounded hover:bg-transparent group  border-2 border-purple-600 hover:border-transparent transition-colors duration-300 ease-in-out group-hover:text-white"
       onClick={handleResumeClick}
     >
    
<span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>


     <span class="relative w-full  transition-colors duration-100 ease-in-out hover:text-white">Resume</span>
       
     </button>
  
     <Slide cascade damping={0.1}>

      {/* List 1 */}
      <List link="#home" effect="slideUp">
        <RiHomeSmileLine /> Home
      </List>
      <List link="#skills" effect="slideUp">
        <RiFireLine /> Skills
      </List>
      <List link="#projects" effect="slideUp">
        <RiCodeSSlashLine /> Projects
      </List>
      <List link="#contact" effect="slideUp">
        <RiContactsLine /> Contact
      </List>

      {/* List 2 */}
      {/* <div className="mt-5">Socials</div> */}

      <List
        target="_blank"
        link="https://github.com/Goutam-04"
        effect="slideUp"
        className="mt-10"
      >
        <RiGithubFill  color="#2a9d8f" /> Github
      </List>

      <List
        target="_blank"
        link="https://twitter.com/Goutam_004"
        effect="slideUp"
      >
        <RiTwitterXFill  color="#1DA1F2" /> Twitter
      </List>
      <List
        target="_blank"
        link="https://mail.google.com/mail/?view=cm&fs=1&su=SubjectText&body= You can contact me at goutamnayak2804@gmail.com. Thank you!"
        effect="slideUp"
      >
        <RiMailSendFill  color="#e63946" /> Gmail
      </List>

      <List
        target="_blank"
        link="https://www.linkedin.com/in/goutam-kumar-nayak/"
        effect="slideUp"
      >
        <RiLinkedinBoxFill  color="#0277b5" absoluteStrokeWidth="false" />
        Linkedin
      </List>
      <List
        target="_blank"
        link="https://www.instagram.com/goutam.kumarnayak/"
        effect="slideUp"
      >
        <RiInstagramLine  color="#b5179e" /> Instagram
      </List>
     </Slide>
    </div>
  );
};

export default Menu;
