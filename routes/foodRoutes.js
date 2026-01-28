const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();

router.get('/:category', foodController.getFoodsByCategory);

module.exports = router;