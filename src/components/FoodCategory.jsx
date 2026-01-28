import React from 'react';

function FoodCategory({ category }) {
  return (
    <div>
      <h3>{category.name}</h3>
    </div>
  );
}

export default FoodCategory;