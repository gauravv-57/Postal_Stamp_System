import React from 'react';

function SortDropdown({ sortOrder, onSortChange }) {
  return (
    <select
      className="w-48 px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-4"
      value={sortOrder}
      onChange={onSortChange}
    >
      <option value="date">Sort by Date</option>
      <option value="alphabetical">Sort by Name (Alphabetical)</option>
      <option value="random">Random Order</option>
    </select>
  );
}

export default SortDropdown;
