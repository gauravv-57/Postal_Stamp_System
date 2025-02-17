import React, { useState } from "react";
import computer from "../assets/Computer.jpeg";
import community from "../assets/Community.jpeg";
import mic from "../assets/Outreach.jpeg";

const Donate = () => {
  // State to manage selected amount and custom amount visibility
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

  // Handle option selection
  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setShowCustomInput(false);
  };

  // Handle custom amount input
  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(e.target.value);
  };

  return (
    <div className="mt-5 mx-20 font-serif">
      <div className="bg-navbar-blue h-10 align-center p-2 pl-4 rounded-lg">
        <span className="font-thin text-amber-300">Donate</span>
      </div>
      <div className="mt-5 mb-3 font-serif w-full flex justify-center items-center">
        <div className="text-3xl font-extrabold text-navbar-blue">
          Support our Philatelic Community
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <span>
          Your contribution helps us enhance the philatelic experience for
          enthusiasts across India.
        </span>
        <span>
          Donations fund website development, community programs, and outreach
          efforts.
        </span>
      </div>
      <div className="flex items-center justify-center mt-5 text-3xl">
        <span className="text-navbar-blue font-bold">
          How your donation helps
        </span>
      </div>
      <div className="mt-3 flex flex-col sm:flex-row items-center justify-between sm:mx-48">
        <div className="flex justify-center items-center flex-col">
          <img
            src={computer}
            alt="Website Development & Maintenance"
            className="w-32 h-32"
          />
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold">
              Website Development <br /> & Maintenance
            </h2>
            <p>
              Ensuring a seamless experience <br /> and continuous improvements.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img src={community} alt="Community Events" className="w-32 h-32" />
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold">Community Events</h2>
            <p>
              Organizing exhibitions, workshops, <br /> and educational
              programs.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <img src={mic} alt="Outreach" className="w-32 h-32" />
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold">Outreach</h2>
            <p>
              Raising awareness and <br /> engaging new philatelists.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 mb-20">
        <div className="flex-1 p-4 bg-custom-blue text-white flex flex-col justify-center items-center rounded-lg w-full max-w-md">
          <div className="mb-4">
            <label className="block mb-2 text-lg font-semibold text-amber-300">
              Choose an amount:
            </label>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleAmountSelect(50)}
                className="font-semibold border text-amber-300 border-amber-300 hover:bg-amber-300 hover:text-custom-blue px-4 py-2 rounded-lg w-full"
              >
                ₹50
              </button>
              <button
                onClick={() => handleAmountSelect(100)}
                className="font-semibold border text-amber-300 border-amber-300 hover:bg-amber-300 hover:text-custom-blue px-4 py-2 rounded-lg w-full"
              >
                ₹100
              </button>
              <button
                onClick={() => handleAmountSelect(150)}
                className="font-semibold border text-amber-300 border-amber-300 hover:bg-amber-300 hover:text-custom-blue px-4 py-2 rounded-lg w-full"
              >
                ₹150
              </button>
              <button
                onClick={() => setShowCustomInput(true)}
                className="font-semibold border text-amber-300 border-amber-300 hover:bg-amber-300 hover:text-custom-blue px-4 py-2 rounded-lg w-full"
              >
                Custom
              </button>
              {showCustomInput && (
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Enter amount"
                  className="border border-gray-300 rounded-lg px-3 py-2 mt-2 w-full"
                />
              )}
            </div>
          </div>
          <button
            className={`bg-navbar-blue text-amber-300 px-6 py-2 rounded-lg mt-4 font-semibold w-full`}
          >
            Donate {selectedAmount ? `₹${selectedAmount}` : ""}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donate;