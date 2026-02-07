const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Route to get all feedback
router.get('/', feedbackController.getAllFeedback);

// Route to create feedback
router.post('/', feedbackController.createFeedback);

module.exports = router;