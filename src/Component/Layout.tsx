import React, { useEffect, useState, useRef, use } from 'react';
import Navbar from './Navbar/index.tsx';
import Section from './Section/index.tsx';
import Footer from './Footer/index.tsx';


const Layout:React.FC = () => {

  const [introScreen, setIntroScreen] = useState<boolean>(true);
  const mynameRef = useRef<HTMLParagraphElement>(null);
  const letterYRef = useRef<HTMLSpanElement>(null);
  const letterURef = useRef<HTMLSpanElement>(null);
  const letterVRef = useRef<HTMLSpanElement>(null);
  const letterA1Ref = useRef<HTMLSpanElement>(null);
  const letterRRef = useRef<HTMLSpanElement>(null);
  const letterA2Ref = useRef<HTMLSpanElement>(null);
  const letterJRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setTimeout(() => {
      const introElement = mynameRef.current;
      introElement?.classList.remove("opacity-0", "translate-y-5");
    }, 1000);
  }, []);

  const onClickLetter = (event) => {
    const letter = event.target;
    if (letter.textContent === 'U' || letter.textContent === 'V') {
      letter.classList.add('translate-y-4');
    } else {
      letter.classList.add('text-red-500');
    }
  }

  const introComponent = (
    <div className='flex flex-1 justify-center items-center'>
      <p 
        ref={mynameRef}
        className='text-2xl md:text-9xl tracking-[20px] md:tracking-[40px] 
                   opacity-0 transition-all duration-[4000ms] ease-out
                   font-rubik'
      >
        <span ref={letterYRef} role='button' onClick={onClickLetter}>Y</span>
        <span ref={letterURef} role='button' onClick={onClickLetter}>U</span>
        <span ref={letterVRef} role='button' onClick={onClickLetter}>V</span>
        <span ref={letterA1Ref} role='button' onClick={onClickLetter}>A</span>
        <span ref={letterRRef} role='button' onClick={onClickLetter}>R</span>
        <span ref={letterA2Ref} role='button' onClick={onClickLetter}>A</span>
        <span ref={letterJRef} role='button' onClick={onClickLetter}>J</span>
      </p>
    </div>
  );

  const portfolioComponent = (
    <>
      <Navbar />
      <Section />
      <Footer />
    </>
  )

  return(
    <div className='flex w-screen h-screen bg-dark text-light font-5 flex-col'>
      {introScreen ? introComponent : portfolioComponent}
    </div>
  );
}

export default Layout;
