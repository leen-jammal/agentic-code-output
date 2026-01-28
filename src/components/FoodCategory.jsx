import React from 'react';
import FoodItem from './FoodItem';

function FoodCategory({ category }) {
    return (
        <div className="food-category">
            <h2>{category.name}</h2>
            <div className="food-items">
                {category.items.map(item => (
                    <FoodItem key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default FoodCategory;