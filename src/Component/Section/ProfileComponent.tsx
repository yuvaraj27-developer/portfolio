import React from 'react';
import ProfileImage from '../../SVG/ProfileImage.tsx';
import QuoteUpSVG from '../../SVG/QuoteUpSVG.tsx';
import QuoteDownSVG from '../../SVG/QuoteDownSVG.tsx';

const ProfileComponent:React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-around'>
      <ProfileImage />
      <div className='max-w-[90%] md:max-w-[50%] my-6 md:my-0 '>
        <h1 className='text-3xl font-7 font-inter text-center md:text-left'>Yuvaraj Arunachalam</h1>
        <div className='mt-5'>
          <span><QuoteUpSVG /></span>
          <p className='text-md font-playwrite leading-8'>
            &nbsp; &nbsp; &nbsp; I believe in aligning individual and organizational growth for mutual success. With software's potential, I aim to create meaningful impact in people's lives. I value work-life harmony as essential for sustainable growth.
          </p>
          <span><QuoteDownSVG /></span>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
