const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Define a route for testing
app.get('/test', (req, res) => {
    res.json({ message: 'Test route working!' });
});

// Error handling for invalid routes (404 Not Found)
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Error handling for server errors (500 Internal Server Error)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));