import React from "react";
import { Link } from "react-router-dom";
import stamp from "../assets/Home_Stamp.jpeg";

const About = () => {
  return (
    <div className="mt-5 mx-20 h-auto">
      <div className="bg-navbar-blue h-10 p-2 pl-4 rounded-lg">
        <span className="font-serif font-thin text-amber-300">About</span>
      </div>
      <div className="mt-5 mx-auto w-3/4 border border-gray-300 shadow-lg rounded-lg p-5 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/2 flex justify-center mb-5 lg:mb-0">
          <img
            src={stamp}
            alt="Stamp"
            className="w-full max-w-md h-auto object-contain pt-10"
          />
        </div>
        <div className="w-full lg:w-1/2 px-5 lg:px-10 text-center lg:text-left font-serif">
          <div className="mb-5 py-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            repudiandae cupiditate voluptate dolor, eaque asperiores odit
            reprehenderit maiores aliquam repellat consectetur impedit? Earum
            maxime omnis quod, doloribus facere saepe a? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Possimus quia, autem asperiores
            velit aut optio, incidunt eos culpa, cumque iste impedit assumenda
            ipsum tempora! Itaque quam debitis dolor nulla magni.
          </div>
          <div className="flex justify-center">
            <Link to="/join">
              <button className="bg-navbar-blue text-amber-300 px-6 py-2 rounded-lg hover:bg-custom-blue transition duration-200 font-semibold">
                Join Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;