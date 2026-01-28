import React from 'react';

function FoodCategory({ category }) {
  return (
    <div>
      <h2>{category.name}</h2>
      {/* Add items related to this category here later */}
    </div>
  );
}

export default FoodCategory;