import React from 'react';

function FoodItem({ food }) {
  return (
    <div className="food-item">
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <p>Price: ${food.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default FoodItem;