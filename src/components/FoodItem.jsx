import React from 'react';

function FoodItem({ item }) {
  return (
    <div>
      <p>{item.name} - {item.calories} calories</p>
    </div>
  );
}

export default FoodItem;