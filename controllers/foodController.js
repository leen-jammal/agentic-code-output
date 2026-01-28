const foods = [
    { id: 1, name: 'Burger', category: 'Meat', price: 10 },
    { id: 2, name: 'Steak', category: 'Meat', price: 20 },
    { id: 3, name: 'Salad', category: 'Vegetarian', price: 8 },
    { id: 4, name: 'Pasta', category: 'Vegetarian', price: 12 },
    { id: 5, name: 'Chicken Soup', category: 'Soup', price: 9 },
];


const getFoodsByCategory = (req, res) => {
    const category = req.params.category;
    const filteredFoods = foods.filter(food => food.category.toLowerCase() === category.toLowerCase());

    if (filteredFoods.length > 0) {
        res.json(filteredFoods);
    } else {
        res.status(404).json({ message: 'No foods found in this category' });
    }
};

module.exports = {
    getFoodsByCategory
};