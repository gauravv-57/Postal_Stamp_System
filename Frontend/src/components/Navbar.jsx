import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Function to get the current day of the year
  const getDayOfYear = () => {
    const start = new Date(new Date().getFullYear(), 0, 0);
    const diff = new Date() - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  // Function to handle "Stamp of The Day" click
  const handleStampOfTheDayClick = () => {
    const stampIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const dayOfYear = getDayOfYear();
    const stampIndex = dayOfYear % stampIds.length; // Ensure index is within bounds
    const stampId = stampIds[stampIndex];
    navigate(`/details/${stampId}`);
  };

  return (
    <div className="justify-between text-amber-300 font-serif bg-custom-blue pb-5">
      <div className="h-20 pl-20 flex items-center justify-between">
        <div className="flex">
          <img src="/vite.svg" alt="Vite" />
          <span className="font-bold text-2xl pl-5">
            Indian Philatelic Society
          </span>
        </div>
        <ul className="flex items-center space-x-4 pr-10 font-semibold">
          <li className="relative flex items-center">
            <Link to="/about" className="rounded-lg hover:bg-navbar-blue p-3">
              About
            </Link>
          </li>
          <li className="relative flex items-center">
            <span className="mr-2">|</span>
            <Link to="/contact" className="rounded-lg hover:bg-navbar-blue p-3">
              Contact
            </Link>
          </li>
          {!user ? (
            <>
              <li className="relative flex items-center">
                <span className="mr-2">|</span>
                <Link
                  to="/join"
                  className="rounded-lg hover:bg-navbar-blue p-3"
                >
                  Join
                </Link>
              </li>
              <li className="relative flex items-center">
                <span className="mr-2">|</span>
                <Link
                  to="/donate"
                  className="rounded-lg hover:bg-navbar-blue p-3"
                >
                  Donate
                </Link>
              </li>
              <li className="relative flex items-center">
                <span className="mr-2">|</span>
                <Link
                  to="/login"
                  className="rounded-lg hover:bg-navbar-blue p-3"
                >
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="relative flex items-center">
                <span className="mr-2">|</span>
                <Link
                  to="/profile"
                  className="rounded-lg hover:bg-navbar-blue p-3"
                >
                  Profile
                </Link>
              </li>
              <li className="relative flex items-center">
                <span className="mr-2">|</span>
                <button
                  onClick={() => {
                    logout();
                    navigate("/login");
                  }}
                  className="rounded-lg hover:bg-navbar-blue p-3"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex z-10 bg-navbar-blue p-2 w-3/5 mx-auto justify-center font-semibold rounded-lg">
        <ul className="flex justify-between">
          {["Member Benefits", "Community", "Shop", "Stamp of The Day"].map(
            (item, index) => (
              <li
                key={index}
                className="group hover:bg-amber-300 hover:text-navbar-blue p-4 rounded-lg flex items-center cursor-pointer"
                onClick={
                  item === "Stamp of The Day"
                    ? handleStampOfTheDayClick
                    : undefined
                }
              >
                {item === "Community" ? (
                  user ? (
                    <Link to="/chatapp" className="flex items-center">
                      <span className="px-2">Community</span>
                    </Link>
                  ) : (
                    <Link to="/login" className="flex items-center">
                      <span className="px-2">Community</span>
                    </Link>
                  )
                ) : item === "Shop" ? (
                  <Link to="/shop" className="flex items-center">
                    <span className="px-2">{item}</span>
                  </Link>
                ) : (
                  <span className="px-2">{item}</span>
                )}
                <span className="pt-1">
                  {/* <TfiAngleDown className="group-hover:hidden" />
                  <TfiAngleUp className="hidden group-hover:block" /> */}
                </span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
