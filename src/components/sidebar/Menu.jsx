import { useState } from 'react';
import {
  Code,
  Flame,
  Github,
  Home,
  Image as ImageIcon,
  Instagram,
  Layers,
  Linkedin,
  Scissors,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
  Video,
  X,
  Youtube,
} from 'lucide-react';
import List from './List';
import { useMenu } from '../../provider/Provider';

const Menu = () => {
  const { showMenuVisibility } = useMenu();
  return (
    <div
      className="flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5"
      onClick={() => showMenuVisibility(false)}
    >
      <div className="block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
        <X className={`text-primary`} />
      </div>
      {/* List 1 */}
      <List link="/" effect="slideUp">
        <Home /> Home
      </List>
      <List link="/" effect="slideUp">
        <Flame /> Trending
      </List>
      <List link="/" effect="slideUp">
        <Code /> Snippets
      </List>
      <List link="#" effect="slideUp">
        <Video /> Videos
      </List>

      {/* List 2 */}
      <div className="mt-5">Socials</div>
      <List
        target="_blank"
        link="#"
        effect="slideUp"
      >
        <Instagram color="#b5179e" /> Instagram
      </List>
      <List target="_blank" link="https://github.com/Goutam-04" effect="slideUp">
        <Github color="#2a9d8f" /> Github
      </List>
      <List
        target="_blank"
        link="#"
        effect="slideUp"
      >
        <Youtube color="#e63946" /> Youtube
      </List>
      <List
        target="_blank"
        link="#"
        effect="slideUp"
      >
        <Layers color="#f77f00" /> Stack overflow
      </List>
      <List
        target="_blank"
        link="#"
        effect="slideUp"
      >
        <Linkedin color="#0277b5" /> Linkedin
      </List>
    </div>
  );
};

export default Menu;

