import React from 'react';
import './FoodItem.css';

function FoodItem({ food }) {
  return (
    <div className="food-item">
      <img src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <p>Price: ${food.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default FoodItem;