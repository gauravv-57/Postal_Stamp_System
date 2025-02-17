import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import Stamp from "./Stamp";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);

  const stamps = [
    {
      id: 1,
      image:
        "https://www.alamy.com/aggregator-api/download?url=https://c8.alamy.com/comp/2C5R31B/indian-independence-stamp-showing-the-indian-flag-the-first-independent-india-stamp-issued-august-1947-2C5R31B.jpg",
      date: "01-01-2001",
      info: "Stamp 1",
      value: "₹500",
      owner: "John Doe",
      verification: "Verified",
      collection: "Historical Collection",
      story:
        "This stamp commemorates the independence of India in 1947. It was the first stamp issued in independent India and symbolizes the beginning of a new era for the country.",
    },
    {
      id: 2,
      image:
        "https://th.bing.com/th/id/OIP.8PrXoBHMIcTxQNHHshD3rwHaH0?w=161&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "01-02-2001",
      info: "Stamp 2",
      value: "₹300",
      owner: "Jane Smith",
      verification: "Pending",
      collection: "Rare Stamps",
      story:
        "This stamp represents the rich cultural heritage of India and was issued to commemorate the cultural diversity of the nation.",
    },
    {
      id: 3,
      image:
        "https://th.bing.com/th/id/OIP.q87TJN26wNRK3fo7mGjmdgHaIS?w=158&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "01-03-2001",
      info: "Stamp 3",
      value: "₹450",
      owner: "Michael Johnson",
      verification: "Verified",
      collection: "Vintage Collection",
      story:
        "This stamp was issued to commemorate the 100th anniversary of Mahatma Gandhi’s birth and features a portrait of him.",
    },
    {
      id: 4,
      image:
        "https://th.bing.com/th/id/OIP.R7AlLOVHT0dzPoFLeYnH3gHaHb?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "01-04-2001",
      info: "Stamp 4",
      value: "₹200",
      owner: "Alice Brown",
      verification: "Pending",
      collection: "Modern Stamps",
      story:
        "This stamp depicts the iconic Taj Mahal, one of the seven wonders of the world, showcasing India’s rich architectural history.",
    },
    {
      id: 5,
      image:
        "https://th.bing.com/th/id/OIP.jtZJA1Jac21nZDaV55dfTQHaFb?w=254&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "01-05-2001",
      info: "Stamp 5",
      value: "₹150",
      owner: "Emma Wilson",
      verification: "Verified",
      collection: "Collectors Series",
      story:
        "This stamp was issued to honor India’s rich biodiversity, featuring a Bengal tiger, the national animal of India.",
    },
    {
      id: 6,
      image:
        "https://th.bing.com/th/id/OIP._Ux_-rMv-HLcSt7fC_EAHQHaHG?w=195&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "01-06-2001",
      info: "Stamp 6",
      value: "₹350",
      owner: "Liam Davis",
      verification: "Pending",
      collection: "Nature Series",
      story:
        "This stamp celebrates India’s independence movement, featuring leaders who played a crucial role in India’s freedom struggle.",
    },
    {
      id: 7,
      image:
        "https://th.bing.com/th/id/OIP.pbddLwtKgvkZyMP2Xi_ETQHaEW?w=326&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "01-07-2001",
      info: "Stamp 7",
      value: "₹500",
      owner: "Olivia Martinez",
      verification: "Verified",
      collection: "Freedom Fighters",
      story:
        "This stamp was issued to mark the centenary of the birth of Subhas Chandra Bose, a prominent leader in the Indian independence movement.",
    },
    {
      id: 8,
      image:
        "https://th.bing.com/th/id/OIP.5VwoFl9o4QYql1P9GhVrmwHaFi?w=249&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "01-08-2001",
      info: "Stamp 8",
      value: "₹400",
      owner: "Sophia Martinez",
      verification: "Pending",
      collection: "Historical Landmarks",
      story:
        "This stamp showcases the Qutub Minar, a UNESCO World Heritage site in Delhi, India, highlighting India’s rich architectural history.",
    },
    {
      id: 9,
      image:
        "https://th.bing.com/th/id/OIP.ieNHy0xrIpMLgU_UXpkUxQHaEd?w=320&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "01-09-2001",
      info: "Stamp 9",
      value: "₹250",
      owner: "James Garcia",
      verification: "Verified",
      collection: "Wildlife Series",
      story:
        "This stamp celebrates India’s rich wildlife, featuring a depiction of the Asiatic elephant, which is an endangered species.",
    },
    {
      id: 10,
      image:
        "https://th.bing.com/th/id/OIP.t551P5tmnFqXgj8C3nW-DQHaGe?w=220&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "01-10-2001",
      info: "Stamp 10",
      value: "₹600",
      owner: "Lucas Martinez",
      verification: "Pending",
      collection: "Independence Series",
      story:
        "This stamp was issued to commemorate India’s struggle for independence and features the Indian flag and an image of the country’s first Prime Minister, Jawaharlal Nehru.",
    },
    {
      id: 11,
      image:
        "https://th.bing.com/th/id/OIP.GlUdNKyw9XcdvyMp2hrZ2wHaIx?w=169&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "01-11-2001",
      info: "Stamp 11",
      value: "₹700",
      owner: "Isabella Turner",
      verification: "Verified",
      collection: "Cultural Heritage",
      story:
        "This stamp represents India’s diverse culture and heritage, featuring traditional Indian art and craft motifs.",
    },
    {
      id: 12,
      image:
        "https://th.bing.com/th/id/OIP.onQdmgYsTLDzs-REWsJdvQHaFB?w=280&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "01-12-2001",
      info: "Stamp 12",
      value: "₹800",
      owner: "Ava Lee",
      verification: "Pending",
      collection: "Rare Stamps",
      story:
        "This stamp was issued to honor the significant achievements of Indian women in various fields, featuring prominent female figures from Indian history.",
    },
    {
      id: 13,
      image:
        "https://th.bing.com/th/id/OIP.onQdmgYsTLDzs-REWsJdvQHaFB?w=280&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      date: "01-12-2001",
      info: "Stamp 13",
      value: "₹900",
      owner: "Noah Perez",
      verification: "Verified",
      collection: "Philately",
      story:
        "This stamp is part of a series issued to promote philately in India, featuring different styles and periods of Indian stamps.",
    },
  ];

  const stampsPerPage = 12;

  const filteredStamps = stamps.filter(
    (stamp) =>
      stamp.date.includes(searchTerm) ||
      stamp.info.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stamp.verification.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stamp.story.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stamp.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stamp.collection.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stamp.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedStamps = [...filteredStamps].sort((a, b) => {
    if (sortOrder === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortOrder === "alphabetical") {
      return a.info.localeCompare(b.info);
    } else if (sortOrder === "random") {
      return Math.random() - 0.5;
    }
    return 0;
  });

  const totalStamps = sortedStamps.length;
  const totalPages = Math.ceil(totalStamps / stampsPerPage);
  const displayedStamps = sortedStamps.slice(
    (currentPage - 1) * stampsPerPage,
    currentPage * stampsPerPage
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-6">Stamp Shop</h1>
        <div className="flex items-center mb-6">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
          <SortDropdown sortOrder={sortOrder} onSortChange={handleSortChange} />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {displayedStamps.map((stamp) => (
            <Stamp key={stamp.id} stamp={stamp} />
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center space-x-2">
          <button
            className={`px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition duration-200`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-200 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
