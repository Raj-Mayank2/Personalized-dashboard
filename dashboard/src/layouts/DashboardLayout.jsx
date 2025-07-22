import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import SearchBar from '../components/SearchBar';

const DashboardLayout = ({ children, searchQuery, onSearch }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">📊 Dashboard</h2>
        <ul className="space-y-4 text-gray-700 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Trending</li>
          <li className="hover:text-blue-500 cursor-pointer">Favorites</li>
        </ul>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <SearchBar onSearch={onSearch} />
          <div className="flex items-center gap-3 ml-4">
            <FaUserCircle size={26} />
            <span className="text-gray-800 font-medium">Mayank</span>
          </div>
        </header>

        {/* Main content */}
        <main className="p-4 overflow-y-auto flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
