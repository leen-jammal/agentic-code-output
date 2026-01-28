import React from 'react';

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      <label htmlFor="category">Filter by Category:</label>
      <select
        id="category"
        value={selectedCategory || ''}
        onChange={(e) => onCategoryChange(e.target.value === '' ? null : e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;