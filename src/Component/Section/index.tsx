import React from 'react';
import ProfileComponent from './ProfileComponent.tsx';
import TechStack from './TechStack.tsx';

const Section:React.FC = () => {
  return(
    <main className='overflow-y-auto'>
      <ProfileComponent />
      <TechStack />
    </main>
  );
}

export default Section;
