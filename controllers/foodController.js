const foodData = require('../data/foodData');

const getAllFoods = (req, res) => {
  res.json(foodData);
};

const getFoodsByCategory = (req, res) => {
  const category = req.params.category;
  const filteredFoods = foodData.filter(food => food.category.toLowerCase() === category.toLowerCase());

  if (filteredFoods.length > 0) {
    res.json(filteredFoods);
  } else {
    res.status(404).json({ message: 'No foods found in that category' });
  }
};

module.exports = {
  getAllFoods,
  getFoodsByCategory
};