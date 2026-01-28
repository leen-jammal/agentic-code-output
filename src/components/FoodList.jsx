import React from 'react';

function FoodList({ foodItems }) {
  return (
    <div className="food-list">
      {foodItems.map(item => (
        <div key={item.idMeal} className="food-item">
          <h3>{item.strMeal}</h3>
          <img src={item.strMealThumb} alt={item.strMeal} style={{ width: '200px', height: 'auto' }} />
          <p>Category: {item.strCategory}</p>
        </div>
      ))}
    </div>
  );
}

export default FoodList;