import React from 'react';

function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search for a cryptocurrency..."
      value={searchTerm}
      onChange={onSearch}
    />
  );
}

export default SearchBar;