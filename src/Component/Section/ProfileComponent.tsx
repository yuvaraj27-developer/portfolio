import React from 'react';
import ProfileImage from '../../SVG/ProfileImage.tsx';
import QuoteUpSVG from '../../SVG/QuoteUpSVG.tsx';
import QuoteDownSVG from '../../SVG/QuoteDownSVG.tsx';

const ProfileComponent:React.FC = () => {
  return (
    <div className='flex flex-rol items-center justify-around'>
      <ProfileImage />
      <div className='max-w-[50%]'>
        <h1 className='text-5xl font-7 font-inter'>Yuvaraj Arunachalam</h1>
        <div className='mt-5'>
          <span><QuoteUpSVG /></span>
          <p className='text-lg font-playwrite leading-8'>
            &nbsp; &nbsp; &nbsp; I believe in aligning individual and organizational growth for mutual success. With software's potential, I aim to create meaningful impact in people's lives. I value work-life harmony as essential for sustainable growth.
          </p>
          <span><QuoteDownSVG /></span>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
