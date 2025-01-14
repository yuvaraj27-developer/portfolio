import React from 'react';
import MenuSVG from '../../SVG/MenuSVG.tsx';

const Navbar:React.FC = () => {
  return(
    <nav className='h-[80px] px-2 z-10 static top-0 right-0 left-0'>
      <div className='flex items-center w-full h-full border-neutral-50'>
        <span className='justify-end button-hover' role='button' tabIndex={1}><MenuSVG /></span>
      </div>
    </nav>
  );
}

export default Navbar;
