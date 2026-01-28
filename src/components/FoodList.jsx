import React from 'react';

function FoodList({ foodItems }) {
  return (
    <ul>
      {foodItems.map(item => (
        <li key={item.id}>{item.name} ({item.category})</li>
      ))}
    </ul>
  );
}

export default FoodList;