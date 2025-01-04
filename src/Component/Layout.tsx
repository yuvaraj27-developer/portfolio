import React, { useState, useRef } from 'react';
import Navbar from './Navbar/index.tsx';
import Section from './Section/index.tsx';
import Footer from './Footer/index.tsx';
import IntroScreen from './IntroScreen.tsx';

const Layout:React.FC = () => {
  const screenRef = useRef<HTMLDivElement>(null);
  const [introScreen, setIntroScreen] = useState<boolean>(true);

  const openPortfolio = () => {
    flashScreen();
    setTimeout(() => {
      setIntroScreen(false);
    }, 1000);
  };

  const flashScreen = () => {
    const screenElement = screenRef.current;
    screenElement?.classList.add('animate-fadeInScreen');
    setTimeout(() => {
      screenElement?.classList.add('animate-fadeOutScreen');
      screenElement?.classList.remove('animate-fadeInScreen');
    }, 1000);
  }

  const portfolioComponent = (
    <>
      <Navbar />
      <Section />
      <Footer />
    </>
  )

  return(
    <div ref={screenRef} className='flex w-screen h-screen bg-dark text-light font-5 flex-col'>
      {introScreen ? <IntroScreen openPortfolio={openPortfolio} /> : portfolioComponent}
    </div>
  );
}

export default Layout;
