import React from 'react';
import FoodCategoryItem from './FoodCategoryItem';
import './FoodCategoryList.css';

function FoodCategoryList() {
  const categories = [
    { id: 1, name: 'Burgers' },
    { id: 2, name: 'Pizza' },
    { id: 3, name: 'Sushi' },
    { id: 4, name: 'Pasta' },
    { id: 5, name: 'Salads' },
  ];

  return (
    <div className="food-category-list">
      <h2>Food Categories</h2>
      <ul className="category-list">
        {categories.map(category => (
          <FoodCategoryItem key={category.id} category={category} />
        ))}
      </ul>
    </div>
  );
}

export default FoodCategoryList;