import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
}

const Layout:React.FC<LayoutProps> = ({ children }) => {
  return(
    <div>
      {children}
      <p className='text-3xl font-bold underline'>I'm the App component</p>
      <p className='bg-primary flex'>I'm the App component</p>
    </div>
  );
}

export default Layout;
