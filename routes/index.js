const express = require('express');
const router = express.Router();

// Define a simple route for the base API endpoint
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

module.exports = router;