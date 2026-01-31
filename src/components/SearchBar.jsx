import React from 'react';

const SearchBar = ({ search, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search a coin"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;