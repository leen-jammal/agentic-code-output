import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;