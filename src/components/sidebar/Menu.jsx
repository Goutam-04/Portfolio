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
} from 'lucide-react';
import List from './List';
import { useMenu } from '../../provider/Provider';
import { Link } from 'react-feather';

const Menu = () => {
  const { showMenuVisibility } = useMenu();

  
  // const handleResumeClick = () => {
  //   window.location.href = '/resume.pdf';
  // };

  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank'); 
  };

  return (
    <div
      className="flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5"
      onClick={() => showMenuVisibility(false)}
    >
      {/* RESUME SECTION */}
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={handleResumeClick} // Attach onClick event handler
      >
        Resume
      </button>

      <div className="block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
        <X className={`text-primary`} />
      </div>
      {/* List 1 */}
      <List link="/" effect="slideUp">
        <Home /> Home
      </List>
      <List link="/" effect="slideUp">
        <Flame /> Skills
      </List>
      <List link="/" effect="slideUp">
        <Code /> Projects
      </List>
      <List link="#" effect="slideUp">
        <Video /> Contact
      </List>

      {/* List 2 */}
      <div className="mt-5">Socials</div>
 
      <List target="_blank" link="https://github.com/Goutam-04" effect="slideUp">
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
        link="https://mail.google.com/mail/?view=cm&fs=1&su=SubjectText&body= IN goutamnayak2804@gmail.com you can contact me. Thank You!"
        effect="slideUp"
      >
        <Mail color="#e63946" /> Gmail
      </List>
      
      <List
        target="_blank"
        link="https://www.linkedin.com/in/goutam-kumar-nayak/"
        effect="slideUp"
      >
        <Linkedin color="#0277b5" absoluteStrokeWidth='false' strokeWidth='4' /> Linkedin
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
