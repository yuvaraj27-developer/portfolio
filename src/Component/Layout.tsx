import React, { useState, useRef } from 'react';
import IntroScreen from './IntroScreen.tsx';
import PortFolioScreen from './PortFolioScreen.tsx';

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
    }, 1500);
  }

  return(
    <div ref={screenRef} className='flex w-full h-full bg-dark bg-custom-gradient text-light font-5 flex-col'>
      {introScreen ? <IntroScreen openPortfolio={openPortfolio} /> : <PortFolioScreen />}
    </div>
  );
}

export default Layout;
