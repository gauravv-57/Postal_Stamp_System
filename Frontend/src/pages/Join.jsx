import React from 'react'

const Join = () => {
  return (
    <div className="mt-5 mx-20 font-serif">
      <div className=" bg-navbar-blue h-10 align-center p-2 pl-4 rounded-lg">
        <span className="font-thin text-amber-300">Join</span>
      </div>
      <div className="mt-5 font-serif w-full flex justify-center items-center">
        <div className="text-3xl font-extrabold text-navbar-blue">
          {" "}
          We invite you to join
        </div>
      </div>
      <div className="flex justify-center items-center">
        Whether you are a beginning collector or have collected for years, we
        welcome you to join.
      </div>
      <div className="flex justify-center space-x-6 p-6 mb-10">
        <div className="w-80 h-140 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transiion-shadow duration-300 flex flex-col items-center p-6">
          <div className="text-2xl font-bold text-gray-800 mb-4">
            Regular Membership
          </div>
          <div className="flex flex-col items-center mb-4">
            <div className="text-4xl font-bold text-gray-900">₹100</div>
            <div className="text-sm font-light text-gray-600">per year</div>
            <div className="text-2xl font-bold text-gray-900">₹8</div>
            <div className="text-sm font-light text-gray-600">per month</div>
          </div>
          <div className="text-center text-gray-700">
            <p className="mb-2">Perks include:</p>
            <ul className="list-disc list-inside">
              <li>Access to all standard facilities</li>
              <li>Monthly newsletter</li>
              <li>Discounts on select events</li>
            </ul>
          </div>
          <button className="bg-navbar-blue text-amber-300 px-6 py-2 mt-2 rounded-lg hover:bg-custom-blue transition duration-200 font-semibold">
            Join Now!
          </button>
        </div>

        <div className="bg-slate-300 w-px h-130 mt-5"></div>

        <div className="w-80 h-140 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6">
          <div className="text-2xl font-bold text-gray-800 mb-4">
            Digital Membership
          </div>
          <div className="text-4xl font-bold text-gray-900">₹50</div>
          <div className="text-sm font-light text-gray-600">per year</div>
          <div className="text-center text-gray-700 mt-4">
            <p className="mb-2">Perks include:</p>
            <ul className="list-disc list-inside">
              <li>Access to digital resources</li>
              <li>Exclusive online content</li>
              <li>Monthly digital newsletter</li>
            </ul>
          </div>
          <button className="bg-navbar-blue text-amber-300 px-6 py-2 rounded-lg hover:bg-custom-blue transition duration-200 font-semibold mt-auto">
            Join Now!
          </button>
        </div>

        <div className="bg-slate-300 w-px h-130 mt-5"></div>

        <div className="w-80 h-140 bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6">
          <div className="text-2xl font-bold text-gray-800 mb-4">
            Life Membership
          </div>
          <div className="text-4xl font-bold text-gray-900">₹500</div>
          <div className="text-sm font-light text-gray-600">
            one-time payment
          </div>
          <div className="text-center text-gray-700 mt-4">
            <p className="mb-2">Perks include:</p>
            <ul className="list-disc list-inside">
              <li>Lifetime access to all facilities</li>
              <li>Personalized support</li>
              <li>Exclusive invites to special events</li>
            </ul>
          </div>
          <button className="bg-navbar-blue text-amber-300 px-6 py-2 rounded-lg hover:bg-custom-blue transition duration-200 font-semibold mt-auto">
            Join Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Join;