'use client'

import * as Feather from "react-feather";
// import Icon from "../../../public/icon.png";
import "./footer.css";

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
                Made with <img src="heart.svg" alt="♥" width={15} height={15} />
              </div>
            </div>
          </div>
          <div className="ContactSection Flex">
            <div className="ContactEntry" onClick={contacts.website}>
              <Feather.Globe />
              {/* <Tooltip>Website</Tooltip> */}
            </div>

            <div className="ContactEntry" onClick={contacts.github}>
              <Feather.GitHub />
              {/* <Tooltip>GitHub</Tooltip> */}
            </div>

            <div className="ContactEntry" onClick={contacts.twitter}>
              <Feather.Twitter />
              {/* <Tooltip>Twitter</Tooltip> */}
            </div>

            <div className="ContactEntry" onClick={contacts.email}>
              <Feather.Mail />
              {/* <Tooltip>Email</Tooltip> */}
            </div>

            <div className="ContactEntry" onClick={contacts.discord}>
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
              <img src="heart.svg" alt="♥" width={15} height={15} />
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
