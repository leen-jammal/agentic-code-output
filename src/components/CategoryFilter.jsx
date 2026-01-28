import React from 'react';

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div>
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;