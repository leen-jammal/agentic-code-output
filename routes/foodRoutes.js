const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/category/:category', foodController.getFoodsByCategory);

module.exports = router;