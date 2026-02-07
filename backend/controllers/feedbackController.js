const Feedback = require('../models/Feedback');

// Function to get all feedback, sorted by createdAt in descending order (newest first)
exports.getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to create new feedback
exports.createFeedback = async (req, res) => {
    const feedback = new Feedback({
        text: req.body.text
    });

    try {
        const newFeedback = await feedback.save();
        res.status(201).json(newFeedback);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};