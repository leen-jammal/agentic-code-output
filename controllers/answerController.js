const Answer = require('../models/Answer');
const Question = require('../models/Question');

exports.submitAnswer = async (req, res) => {
    try {
        const { questionId, answer } = req.body;

        // Find the question
        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        const isCorrect = answer === question.correctAnswer;

        const newAnswer = new Answer({
            questionId: questionId,
            answer: answer,
            isCorrect: isCorrect
        });

        await newAnswer.save();
        res.status(201).json(newAnswer);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};