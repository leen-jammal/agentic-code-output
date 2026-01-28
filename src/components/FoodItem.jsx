import React from 'react';

function FoodItem({ food }) {
  return (
    <div className="food-item">
      <img src={food.strMealThumb} alt={food.strMeal} />
      <h3>{food.strMeal}</h3>
      <button>Add to Cart</button>
    </div>
  );
}

export default FoodItem;