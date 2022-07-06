import React from "react";

export const GradientBtn = ({ title, className }) => {
  return (
    <button
      className={`bg-gradient-to-r from-blue-800 to-thViolet py-2 px-6 text-black rounded-lg duration-300 hover:scale-110 ${className}`}
    >
      {title}
    </button>
  );
};
