import React from 'react';
import { Layout} from '../components/index';
import "../styles/index.css"
import { ThemeProvider } from '../components/Context/theme';



const IndexPage = () => (
  <>

  <ThemeProvider>

  <Layout >

  </Layout>
  </ThemeProvider>
  </>
);


export default IndexPage;
