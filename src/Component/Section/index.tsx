import React from 'react';
import ProfileComponent from './ProfileComponent.tsx';

const Section:React.FC = () => {
  return(
    <main className='overflow-y-auto'>
      <ProfileComponent />
    </main>
  );
}

export default Section;
