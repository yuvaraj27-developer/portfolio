import React from 'react';
import ProfileImage from '../../SVG/ProfileImage.tsx';

const Section:React.FC = () => {
  return(
    <section className='flex-1 flex flex-col items-center'>
      <ProfileImage />
    </section>
  );
}

export default Section;
