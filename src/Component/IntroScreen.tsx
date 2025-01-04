import React, { useRef, useEffect, useState } from 'react';

type props = {
  openPortfolio: () => void;
}

type refsType = {
  [key: string]: React.RefObject<HTMLSpanElement | null>;
}

const IntroScreen:React.FC<props> = ({ openPortfolio }) => {
  const [isUClicked, setIsUClicked] = useState<boolean>(false);
  const [isVClicked, setIsVClicked] = useState<boolean>(false);
  const findMyNameRef = useRef<HTMLDivElement>(null);
  const myNameRef = useRef<HTMLParagraphElement>(null);
  const letterURef = useRef<HTMLSpanElement>(null);
  const letterVRef = useRef<HTMLSpanElement>(null);

  const refs = { U: letterURef, V: letterVRef } as refsType;

  useEffect(() => {
    setTimeout(() => {
      const findMyNameElement = findMyNameRef.current;
      findMyNameElement?.classList.remove("opacity-0");
    }, 1000);

    setTimeout(() => {
      const introElement = myNameRef.current;
      introElement?.classList.remove("opacity-0");
      introElement?.classList.add("tracking-wide");
    }, 2000);
  }, []);

  useEffect(() => {
    if (isUClicked && isVClicked) {
      const letterUElement = letterURef.current;
      const letterVElement = letterVRef.current;
      letterUElement?.classList.add('animate-zoomOutScreen');
      letterVElement?.classList.add('animate-zoomOutScreen');

      setTimeout(() => {
        openPortfolio();
      }, 2000);
    }
  }, [isUClicked, isVClicked]);

  const onClickLetter = (event) => {
    const letter = event.target;
    if (letter.textContent === 'U' || letter.textContent === 'V') {
      if (letter.textContent === 'U') {
        setIsUClicked(true);
      } else {
        setIsVClicked(true);
      }
      letter.classList.add('-translate-y-4');
    } else {
      letter.classList.add('opacity-0', 'text-red-500', 'ease-in-out', 'duration-1000');
    }
  }

  return (
    <div className='flex flex-1 justify-center items-center flex-col overflow-hidden'>
      <div className='mb-4'>
        <p ref={findMyNameRef} className='text-xl font-rubik opacity-0 duration-[4000ms] ease-out tracking-widest'>
          Uncover my nick name
        </p>
      </div>
      <div>
        <p 
          ref={myNameRef}
          className='text-2xl md:text-9xl font-rubik flex opacity-0 transition-all duration-[4000ms] ease-out'
        >
          {['Y', 'U', 'V', 'A', 'R', 'A', 'J'].map((letter, index) => (
            <span
              key={index}
              role='button'
              ref={refs[letter] || null}
              onClick={onClickLetter}
              className='px-5'
            >
              {letter}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default IntroScreen;
