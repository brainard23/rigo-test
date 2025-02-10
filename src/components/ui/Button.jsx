import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[278px] rounded-3xl bg-[#39B7FF] px-6 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[#2da8f0] focus:outline-none focus:ring-2 focus:ring-[#39B7FF] focus:ring-offset-2"
    >
      {children}
    </button>
  );
};

export default Button;
