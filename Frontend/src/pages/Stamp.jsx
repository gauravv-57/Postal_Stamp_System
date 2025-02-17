import React from "react";
import { Link } from "react-router-dom";

function Stamp({ stamp }) {
  return (
    <div className="relative w-64 h-40 bg-white/40% shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
      <img
        src={stamp.image}
        alt={stamp.info}
        className="w-full h-full object-contain"
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 bg-gray-800 bg-opacity-75 text-white px-4 py-2 text-sm rounded transition-transform duration-300 ease-in-out w-full flex justify-between">
        <div>
          <p>{stamp.info}</p>
          <p>{stamp.date}</p>
        </div>
        <Link
          to={`/details/${stamp.id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Know More
        </Link>
      </div>
    </div>
  );
}

export default Stamp;