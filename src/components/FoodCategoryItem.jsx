import React from 'react';
import './FoodCategoryItem.css';

function FoodCategoryItem({ category }) {
  return (
    <li className="food-category-item">
      {category.name}
    </li>
  );
}

export default FoodCategoryItem;