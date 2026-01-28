import React from 'react';
import FoodItem from './FoodItem';
import './FoodList.css';

function FoodList({ foods }) {
  return (
    <div className="food-list">
      {foods.map(food => (
        <FoodItem key={food._id} food={food} />
      ))}
    </div>
  );
}

export default FoodList;