const express = require('express');
const questionController = require('../controllers/questionController');

const router = express.Router();

router.post('/add', questionController.addQuestion);
router.get('/all', questionController.getAllQuestions);
router.post('/submitAnswer', questionController.submitAnswer);

module.exports = router;