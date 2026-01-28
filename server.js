const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

// Example route that might cause an error
app.get('/error', (req, res) => {
    try {
        // Simulate an error
        throw new Error('Simulated server error');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Error handling middleware (must be defined after all routes)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));