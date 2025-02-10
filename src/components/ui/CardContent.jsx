import React from 'react';

const CardContent = ({ children, title }) => {
  return (
    <div className='flex flex-col justify-center items-center text-white w-full'>
      {children}
    </div>
  );
};

export default CardContent;
