import React from "react";

const BlurrCard = ({ children }) => {
  return (
    <div class="flex justify-center p-12 items-center text-center m-2 lg:w-[448px] lg:h-[236px] flex-shrink-0 rounded-[42.803px] border border-white bg-[rgba(245,245,245,0.10)] backdrop-blur-[10px] lg:text-[50px] text-2xl">
      {children}
    </div>
  );
};

export default BlurrCard;
