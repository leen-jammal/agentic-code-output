import React from 'react';
import FoodItem from './FoodItem';

const foodData = [
  { id: 1, name: 'Pizza', price: 10, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Burger', price: 8, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Sushi', price: 15, image: 'https://via.placeholder.com/150' },
];

function FoodList({ addItemToCart }) {
  return (
    <div className="food-list">
      <h2>Menu</h2>
      {foodData.map(food => (
        <FoodItem key={food.id} food={food} addItemToCart={addItemToCart} />
      ))}
    </div>
  );
}

export default FoodList;