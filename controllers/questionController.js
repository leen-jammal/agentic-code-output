const Question = require('../models/Question');

// Add a question
exports.addQuestion = async (req, res) => {
    try {
        const { questionText, options, correctAnswer } = req.body;
        const newQuestion = new Question({
            questionText,
            options,
            correctAnswer
        });
        await newQuestion.save();
        res.status(201).json({ message: 'Question added successfully', question: newQuestion });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add question' });
    }
};

// Get all questions
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve questions' });
    }
};

// Submit answer and check if correct
exports.submitAnswer = async (req, res) => {
    try {
        const { questionId, answer } = req.body;

        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        if (answer