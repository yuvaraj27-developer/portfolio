import React from 'react';
import MenuSVG from '../../SVG/MenuSVG.tsx';

const Navbar:React.FC = () => {
  return(
    <nav className='h-7 px-2 flex items-center'>
      <span className='justify-end button-hover' role='button' tabIndex={1}><MenuSVG /></span>
    </nav>
  );
}

export default Navbar;
