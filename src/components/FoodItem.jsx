import React from 'react';

function FoodItem({ food, addItemToCart }) {
  return (
    <div className="food-item">
      <img src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <p>${food.price}</p>
      <button onClick={() => addItemToCart(food)}>Add to Cart</button>
    </div>
  );
}

export default FoodItem;