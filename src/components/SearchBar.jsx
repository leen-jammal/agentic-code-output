import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Directly call onSearch on every change
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for food..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;