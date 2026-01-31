import React from 'react';

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <input
      type="text"
      placeholder="Search for a cryptocurrency"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}

export default SearchBar;