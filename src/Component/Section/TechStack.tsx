import React, { ReactElement } from 'react';

type techStackObj = {
  name: string,
  logo: string,
}

const TechStack:React.FC = () => {
  
  const techStackList: techStackObj[] = [
    { name: 'ReactJs', logo: '' },
    { name: 'Javascript', logo: '' },
    { name: 'Typescript', logo: '' },
    { name: 'Ruby on rails', logo: '' },
    { name: 'TailwindCSS', logo: '' },
    { name: 'MaterialUI', logo: '' },
    { name: 'SQL', logo: '' },
  ]

  const techStackComponent = ({name, logo}: techStackObj): ReactElement => (
    <div>
      {name}
    </div>
  );
  
  return (
    <div className='bg-[#07062178] rounded-lg w-[90%]'>
      {techStackList.map(techStackComponent)}
    </div>
  );
}

export default React.memo(TechStack);
