import React from 'react';
import './FoodItem.css';

function FoodItem({ food }) {
  return (
    <div className="food-item">
      <img src={food.image} alt={food.name} className="food-image" />
      <div className="food-details">
        <h3 className="food-name">{food.name}</h3>
        <p className="food-description">{food.description}</p>
        <p className="food-price">${food.price}</p>
      </div>
    </div>
  );
}

export default FoodItem;