import React from "react";

const BlurrCard = ({ children }) => {
  return (
    <div class="flex justify-center p-12 items-center text-center m-2 w-[448px] h-[236px] flex-shrink-0 rounded-[42.803px] border border-white bg-[rgba(245,245,245,0.10)] backdrop-blur-[10px] text-[50px]">
      {children}
    </div>
  );
};

export default BlurrCard;
