const express = require('express');
const router = express.Router();
const counterController = require('../controllers/counter');

router.post('/increment', counterController.incrementCounter);

module.exports = router;