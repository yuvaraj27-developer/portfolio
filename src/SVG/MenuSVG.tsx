import React, { useState } from 'react';

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <path d='M3 7H21' stroke="#f4f4f4" strokeWidth="1.5" strokeLinecap="round" />
      <path d={isMenuOpen ? 'M3 12H18' : 'M3 12H21'} stroke="#f4f4f4" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="24" strokeDashoffset={isMenuOpen ? 0 : 24} style={{ transition: 'stroke-dashoffset 0.5s ease', strokeDasharray: isMenuOpen ? '24' : '0' }} />
      <path d='M3 17H21' stroke="#f4f4f4" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
