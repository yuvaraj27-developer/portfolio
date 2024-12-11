import React from 'react';
import Navbar from './Navbar/index.tsx';
import Section from './Section/index.tsx';
import Footer from './Footer/index.tsx';


const Layout:React.FC = () => {
  return(
    <div className='flex w-screen h-screen bg-dark text-light font-5 flex-col'>
      <Navbar />
      <Section />
      <Footer />
    </div>
  );
}

export default Layout;
