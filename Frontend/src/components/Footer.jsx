import React from 'react';
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 bg-custom-blue w-full h-10 text-amber-300 font-serif flex justify-center items-center">
      <FaRegCopyright />
      <span>2024. Indian Philatelic Society. All Rights Reserved.</span>
    </div>
  );
}

export default Footer