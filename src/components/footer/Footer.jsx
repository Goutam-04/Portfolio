'use client'

import * as Feather from "react-feather";
// import Icon from "../../../public/icon.png";
// import Tooltip from "../tooltip/Tooltip";
import "./footer.css";
import Image from "next/image";

const Footer = () => {

  return (
    <footer>
      <div className="Flex">
        <div className="LeftSections">
          <div className="HeadSection FlexCenter">
            <img className="Logo" src="./icon.png" alt="Logo" />
            <div>
              <h2>Goutam</h2>
              <div>
                Made with <Image src="heart.svg" alt="♥" width={15} height={15} />
              </div>
            </div>
          </div>
          <div className="ContactSection Flex">
            <div className="ContactEntry" >
              <Feather.Globe />
              {/* <Tooltip>Website</Tooltip> */}
            </div>

            <div className="ContactEntry" >
              <Feather.GitHub />
              {/* <Tooltip>GitHub</Tooltip> */}
            </div>

            <div className="ContactEntry" >
              <Feather.Twitter />
              {/* <Tooltip>Twitter</Tooltip> */}
            </div>

            <div className="ContactEntry" >
              <Feather.Mail />
              {/* <Tooltip>Email</Tooltip> */}
            </div>

            <div className="ContactEntry" >
              <Feather.MessageSquare />
              {/* <Tooltip>Discord</Tooltip> */}
            </div>
          </div>
        </div>

        <div className="MiddleSection">{/*  TODO add some shit here.  */}</div>

        <div className="RightSections FlexCenter">
          <div className="LinksSection">
            <a href="https://github.com/Goutam-04/Portfolio">Source Code</a>
            <a href="https://feathericons.com/">Icons Used</a>
            <a href="https://metalloriff.github.io/city-fog">Color Palette</a>
            <a href="https://paypal.me/">
              <img src="heart.svg" alt="♥" width={15} height={15} />
              <span style={{ margin: "0 7px" }}>Donate</span>
              <Image src="heart.svg" alt="♥" width={15} height={15} />
            </a>

            <div className="Copyright">
              Copyright © {new Date().getFullYear()} Goutam Nayak
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
