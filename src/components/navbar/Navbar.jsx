'use client';
import React from 'react';
import { useMenu } from '../../provider/Provider';

import Marquee from "react-fast-marquee";
import { RiMenu4Fill } from '@remixicon/react';
import { Fade } from 'react-awesome-reveal';

const Navbar = ({}) => {
    const { showMenu, showMenuVisibility } = useMenu();
    const text=['HTML5',
    'CSS',
    'Tailwind',
    'Javascript',
    'React Js',
    'Next Js 13',
    'Gatsby Js','Node Js', 'Express Js', 'Next Auth','Socket IO','MongoDB','Postman','Linux OS','Canva','Adobe XD', 'Docker',
    'Kubernetes',
    'GIT',' ']
    return (
        <Fade direction='down'>

        <nav  className="flex sticky  top-0 z-1 bg-body p-5 text-info justify-between ">
            {/* <SearchBar /> */}
            {/* <div>Place holder for search bar</div> */}
            <Marquee className='bg-cyan-950' pauseOnHover='true' speed='75' gradient='true' gradientColor='#092047'> 
  {
    text.join(' • ')
  }
</Marquee>
            <div className="flex items-center gap-5">
                <button
                    onClick={() => showMenuVisibility(!showMenu)}
                    type="button"
                >
                    <RiMenu4Fill size={30} className="flex lg:hidden cursor-pointer hover:text-primary transition-colors" />
                </button>
            </div>
        </nav>
        </Fade>
    );
};

export default Navbar;
