const foods = [
    { id: 1, name: 'Burger', category: 'Meat' },
    { id: 2, name: 'Steak', category: 'Meat' },
    { id: 3, name: 'Chicken Salad', category: 'Salad' },
    { id: 4, name: 'Pasta Salad', category: 'Salad' },
    { id: 5, name: 'Salmon', category: 'Fish' },
    { id: 6, name: 'Tuna', category: 'Fish' },
];


const getFoodsByCategory = (req, res) => {
    const category = req.params.category;
    const foodsInCategory = foods.filter(food => food.category.toLowerCase() === category.toLowerCase());

    if (foodsInCategory.length > 0) {
        res.json(foodsInCategory);
    } else {
        res.status(404).json({ message: 'No foods found in this category' });
    }
};

module.exports = {
    getFoodsByCategory
};