// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Header} from '../components/index';
import "../styles/layout.css"
import { ThemeContext } from "./Context/theme";

const Layout = () => {

  const [{ themename }] = React.useContext(ThemeContext);

  return (
      
    <div id="top" className={`${themename} app`}>
    <section id="#home">
      <Header />
    </section>
    </div>
    
  );
};



export default Layout;
