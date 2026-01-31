import React from 'react';
import './SearchBar.css';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Wikipedia"
        value={searchTerm}
        onChange={onSearchChange}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;