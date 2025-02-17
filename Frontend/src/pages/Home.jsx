import React from 'react';
import { FaNewspaper, FaCalendarAlt } from 'react-icons/fa'; // Importing icons
import './Home.css'; // Import the CSS file for custom styles

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Indian Philatelic Society</h1>
        <p className="text-lg text-gray-600 mb-4">
          At Indian Philatelic Society, we are passionate about bringing together philatelists from around the globe. Whether you're a seasoned collector or just beginning your journey, our platform is designed to inspire, inform, and connect you with fellow enthusiasts.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
      
      {/* Flex container for side-by-side divs */}
      <div className="flex gap-6 mb-6">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaNewspaper className="text-blue-600 text-3xl mr-3" />
            <h2 className="text-2xl font-semibold text-gray-700">Latest News</h2>
          </div>
          <p className="text-base text-gray-600 mb-2">
            <strong>New Issue Alert:</strong> The Indian Post recently released a new series of stamps commemorating the 75th anniversary of India's independence. This special edition features iconic symbols of freedom and unity. Collectors are advised to check their local post offices for availability.
          </p>
          <p className="text-base text-gray-600">
            <strong>Stamp Exhibition:</strong> The National Philatelic Exhibition will be held in Mumbai next month. It will showcase rare and historic stamps from across the world, including a special segment dedicated to Indian post stamps. Don't miss the chance to meet other collectors and gain valuable insights into stamp collecting.
          </p>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <FaCalendarAlt className="text-green-600 text-3xl mr-3" />
            <h2 className="text-2xl font-semibold text-gray-700">Upcoming Events</h2>
          </div>
          <p className="text-base text-gray-600 mb-2">
            <strong>Philatelic Workshop:</strong> Join us for a hands-on workshop on September 15th in Delhi. Learn about stamp preservation techniques, the history of Indian stamps, and how to expand your collection. Register early as spots are limited.
          </p>
          <p className="text-base text-gray-600">
            <strong>Annual Stamp Fair:</strong> Our Annual Stamp Fair will take place on October 20th in Bangalore. This event will feature stamp dealers, rare finds, and interactive sessions with philatelic experts. A great opportunity to enhance your collection and meet like-minded enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
