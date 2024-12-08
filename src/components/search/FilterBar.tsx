import React from 'react';

export function FilterBar() {
  return (
    <div className="flex items-center space-x-4">
      <select className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500">
        <option>All Categories</option>
        <option>Web Development</option>
        <option>Mobile Development</option>
        <option>UI/UX Design</option>
        <option>AI/ML</option>
      </select>
      
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Apply Filters
      </button>
    </div>
  );
}