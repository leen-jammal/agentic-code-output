const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/', foodController.getAllFoods);
router.get('/category/:category', foodController.getFoodsByCategory); // New route

module.exports = router;