import React from 'react';

const Card = ({ children }) => {
  return (
    <div className={`shadow-lg rounded-lg p-6 md:w-[261px]`}>
      {children}
    </div>
  );
};

export default Card;
