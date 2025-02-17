import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4 font-serif">
      <h2 className="text-xl font-bold mb-6">Shop Categories</h2>
      <ul className="space-y-4">
        <li>
          <h1 className="hover:text-gray-400">
            All Stamps
          </h1>
        </li>
        <li>
          <h1 className="hover:text-gray-400">
            Rare Stamps
          </h1>
        </li>
        <li>
          <h1 className="hover:text-gray-400">
            Modern Stamps
          </h1>
        </li>
        <li>
          <h1 className="hover:text-gray-400">
            Historical Stamps
          </h1>
        </li>
        <li>
          <h1 className="hover:text-gray-400">
            Collectors Series
          </h1>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;