// src/components/SearchBar.jsx
import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  // Debounce the input: only call onSearch 500ms after user stops typing
  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(input.trim());
    }, 500);

    return () => clearTimeout(handler); // Cleanup on input change
  }, [input, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;
